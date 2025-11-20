'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { DailyChallenge } from '@/lib/types';
import { DAILY_CHALLENGES } from '@/lib/constants';

export function useChallenges(userId: string | undefined) {
  const [challenges, setChallenges] = useState<DailyChallenge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    async function loadChallenges() {
      try {
        const today = new Date().toISOString().split('T')[0];
        
        const { data: completedToday } = await supabase
          .from('completed_challenges')
          .select('challenge_id')
          .eq('user_id', userId)
          .gte('completed_at', today);

        const completedIds = new Set(
          completedToday?.map((c) => c.challenge_id) || []
        );

        const challengesWithStatus = DAILY_CHALLENGES.map((challenge) => ({
          ...challenge,
          completed: completedIds.has(challenge.id),
        }));

        setChallenges(challengesWithStatus);
      } catch (error) {
        console.error('Erro ao carregar desafios:', error);
      } finally {
        setLoading(false);
      }
    }

    loadChallenges();
  }, [userId]);

  const completeChallenge = async (challengeId: string, xpReward: number) => {
    if (!userId) return;

    try {
      // Marcar desafio como completo
      await supabase.from('completed_challenges').insert({
        user_id: userId,
        challenge_id: challengeId,
        xp_earned: xpReward,
      });

      // Atualizar XP do usuário
      const { data: profile } = await supabase
        .from('profiles')
        .select('xp, level')
        .eq('id', userId)
        .single();

      if (profile) {
        const newXp = profile.xp + xpReward;
        const xpPerLevel = 2000;
        const newLevel = Math.floor(newXp / xpPerLevel) + 1;

        await supabase
          .from('profiles')
          .update({ 
            xp: newXp, 
            level: newLevel,
            last_activity: new Date().toISOString().split('T')[0]
          })
          .eq('id', userId);
      }

      // Atualizar estado local
      setChallenges((prev) =>
        prev.map((c) =>
          c.id === challengeId ? { ...c, completed: true } : c
        )
      );

      return true;
    } catch (error) {
      console.error('Erro ao completar desafio:', error);
      return false;
    }
  };

  return { challenges, loading, completeChallenge };
}

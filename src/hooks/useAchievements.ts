'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Achievement } from '@/lib/types';
import { ACHIEVEMENTS } from '@/lib/constants';

export function useAchievements(userId: string | undefined) {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    async function loadAchievements() {
      try {
        const { data: unlockedAchievements } = await supabase
          .from('user_achievements')
          .select('achievement_id')
          .eq('user_id', userId);

        const unlockedIds = new Set(
          unlockedAchievements?.map((a) => a.achievement_id) || []
        );

        const achievementsWithStatus = ACHIEVEMENTS.map((achievement) => ({
          ...achievement,
          unlocked: unlockedIds.has(achievement.id),
        }));

        setAchievements(achievementsWithStatus);
      } catch (error) {
        console.error('Erro ao carregar conquistas:', error);
      } finally {
        setLoading(false);
      }
    }

    loadAchievements();
  }, [userId]);

  return { achievements, loading };
}

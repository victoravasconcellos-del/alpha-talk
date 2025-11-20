'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';

// Cliente para componentes client-side
export const supabase = createClientComponentClient();

// Cliente para operações server-side (quando necessário)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Tipos
export interface Profile {
  id: string;
  name: string;
  level: number;
  xp: number;
  streak: number;
  subscription: 'free' | 'premium';
  created_at: string;
  updated_at: string;
}

// Funções auxiliares
export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Erro ao buscar perfil:', error);
    return null;
  }

  return data;
}

export async function createProfile(userId: string, name: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .insert({
      id: userId,
      name,
      level: 1,
      xp: 0,
      streak: 0,
      subscription: 'free',
    })
    .select()
    .single();

  if (error) {
    console.error('Erro ao criar perfil:', error);
    return null;
  }

  return data;
}

export async function updateProfile(userId: string, updates: Partial<Profile>): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('Erro ao atualizar perfil:', error);
    return null;
  }

  return data;
}

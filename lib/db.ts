import { createClient } from '@supabase/supabase-js';

export type EnrollmentRecord = {
  id: number;
  name: string;
  child_name: string;
  age: number;
  phone: string;
  message: string;
  created_at: string;
};

export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)?.trim();

  if (!url || !key || url.includes('your-project') || key.includes('your-')) {
    return null;
  }

  return createClient(url, key);
}

export async function saveEnrollment(input: {
  name: string;
  childName: string;
  age: number;
  phone: string;
  message: string;
}) {
  const supabase = getSupabaseClient();

  if (!supabase) {
    throw new Error(
      'Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to your .env.local file.'
    );
  }

  const { data, error } = await supabase
    .from('enrollments')
    .insert([
      {
        name: input.name,
        child_name: input.childName,
        age: input.age,
        phone: input.phone,
        message: input.message,
      },
    ])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getEnrollments() {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return [] as EnrollmentRecord[];
  }

  const { data, error } = await supabase
    .from('enrollments')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as EnrollmentRecord[];
}

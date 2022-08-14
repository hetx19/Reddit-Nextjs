import { createClient } from '@supabase/supabase-js'

const SupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const SupabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(SupabaseUrl, SupabaseAnonKey)
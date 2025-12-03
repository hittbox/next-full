import { createClient } from '@supabase/supabase-js'

const BASE_URL = process.env.VITE_SUPABASE_URL!;
const KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY!;

const supabase = createClient(BASE_URL, KEY);

export default supabase;
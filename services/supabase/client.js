import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client with environment variables or use direct URL for demo
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if environment variables are properly configured
export const isSupabaseConfigured = supabaseUrl && supabaseKey;

// Set up Supabase client options
const options = {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
  global: {
    headers: {
      'X-Client-Info': 'nextjs-template',
    },
  },
};

// Create Supabase client only if properly configured
let supabaseClient;
if (isSupabaseConfigured) {
  supabaseClient = createClient(supabaseUrl, supabaseKey, options);
} else {
  // Create a mock client with no-op methods when not configured
  supabaseClient = {
    auth: {
      getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signUp: () => Promise.resolve({ error: { message: 'Supabase not configured' } }),
      signIn: () => Promise.resolve({ error: { message: 'Supabase not configured' } }),
      signOut: () => Promise.resolve({ error: null }),
    },
  };
}

export const supabase = supabaseClient;
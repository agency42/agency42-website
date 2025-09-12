import { createClient } from "@supabase/supabase-js";

/**
 * Purpose: Server-side Supabase client factory.
 * Uses Service Role key when available; falls back to anon for local/dev.
 * Objectives: support server routes for newsletter + inquiries.
 */
export function getSupabaseServerClient() {
  const url = (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL) as string | undefined;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;
  const anon = (process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) as string | undefined;
  if (!url || !(service || anon)) {
    throw new Error("Supabase env vars missing (SUPABASE_URL and either SUPABASE_SERVICE_ROLE_KEY or SUPABASE_ANON_KEY)");
  }
  const key = service || anon!;
  return createClient(url, key, {
    auth: { persistSession: false },
    db: { schema: "public" },
  });
}



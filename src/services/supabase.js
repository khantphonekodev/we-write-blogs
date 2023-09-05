import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zbqqjtzjipkrbgmaklvy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpicXFqdHpqaXBrcmJnbWFrbHZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzMjM2NDksImV4cCI6MjAwODg5OTY0OX0.GrGocMC1ELDiRHOu631zFhNW0YDZhmaPRhyK-ENdteY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

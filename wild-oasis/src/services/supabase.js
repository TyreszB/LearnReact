import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tixzxewfqpmioujrssvm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpeHp4ZXdmcXBtaW91anJzc3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwOTkyMjIsImV4cCI6MjAxMDY3NTIyMn0.600cFlryM0q8KG7uM64204mwGMIuoz84m3QLka5OnBs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";
import { Database } from "./typedefs/databaseschema";

const supabase = createClient<Database>(
  "https://rbfpsmkfdaqlxiddervf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiZnBzbWtmZGFxbHhpZGRlcnZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ2MTI0MzYsImV4cCI6MjAwMDE4ODQzNn0.Bjv8FtEs7nt4I3CRjiEosV6OgggBYcUSujZxDd1NlDM "
);

export default supabase;

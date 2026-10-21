# Security checklist 

The contact form's table, policy and trigger are set up in the Supabase
dashboard rather than in this repo, so these items can't be checked from the
code alone. Re-check them after any change to the database.

## Row Level Security on `contact_submissions`
- [ ] RLS is **enabled** on `public.contact_submissions`
- [ ] The only policy is an `INSERT` policy; there is no `SELECT`, `UPDATE` or `DELETE` policy
- [ ] The `anon` role has no `SELECT`/`UPDATE`/`DELETE` privilege on the table
- [ ] Reading as anon (anon key, `/rest/v1/contact_submissions`) returns nothing / is denied
- [ ] (Optional) the INSERT policy is scoped `TO anon` rather than `TO public`

Handy SQL (SQL editor):

```sql
select relrowsecurity from pg_class where oid = 'public.contact_submissions'::regclass;
select policyname, cmd, roles, with_check from pg_policies where tablename = 'contact_submissions';
select grantee, privilege_type from information_schema.role_table_grants where table_name = 'contact_submissions';
select tgname from pg_trigger where tgrelid = 'public.contact_submissions'::regclass and not tgisinternal;
```

## Trigger and Edge Function
- [ ] The trigger on `contact_submissions` calls `notify-submission` and its request is authenticated (no service-role key stored in plain SQL or in git)
- [ ] Edge Function secrets are set: `RESEND_API_KEY`, `NOTIFY_TO_EMAIL` (and `FROM_EMAIL` once a sending domain is verified)
- [ ] A test submission reaches the intended inbox

## Spam and abuse
- [ ] Decide on spam handling: honeypot field and/or rate limiting (none exists today)
- [ ] Check the table size and Resend usage after launch for unexpected spikes

## Secrets hygiene
- [ ] Only the anon key is exposed to the browser (`VITE_` variables are public by design)
- [ ] No `.env*` files are committed; `SUPABASE_ACCESS_TOKEN` lives only in GitHub Actions secrets
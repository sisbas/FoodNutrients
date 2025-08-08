-- Supabase schema for dietitian nutrient application

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  locale text default 'tr'
);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  plan text default 'trial',
  status text default 'active',
  trial_started_at timestamptz,
  trial_ends_at timestamptz
);

create table if not exists favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  fdc_id bigint,
  name text,
  created_at timestamptz default now(),
  unique (user_id, fdc_id)
);

create table if not exists recents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  fdc_id bigint,
  name text,
  viewed_at timestamptz default now(),
  unique (user_id, fdc_id)
);

create table if not exists profile_settings (
  user_id uuid primary key references users(id),
  profile_id text,
  updated_at timestamptz default now()
);

-- RLS
alter table users enable row level security;
alter table subscriptions enable row level security;
alter table favorites enable row level security;
alter table recents enable row level security;
alter table profile_settings enable row level security;

-- Policies: user can manage own records
create policy "Users manage own data" on favorites for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users manage own data" on recents for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users manage own settings" on profile_settings for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Service role manages subscriptions" on subscriptions for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');

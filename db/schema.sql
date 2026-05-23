create extension if not exists pgcrypto;

create table if not exists public.users (
    id uuid primary key default gen_random_uuid(),
    ruc varchar(11) unique not null,
    sol_username varchar(50) not null,
    password_hash varchar(255) not null,
    full_name varchar(150) not null,
    created_at timestamptz default now()
);

create table if not exists public.clients (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references public.users(id) on delete cascade,
    client_ruc varchar(11) not null,
    client_name varchar(255) not null,
    created_at timestamptz default now(),
    unique(user_id, client_ruc)
);

create table if not exists public.receipts (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references public.users(id) on delete restrict,
    client_id uuid references public.clients(id) on delete restrict,
    receipt_number varchar(20) unique not null,
    gross_amount decimal(12, 2) not null,
    retention_applied boolean default false,
    retention_amount decimal(12, 2) default 0.00,
    net_amount decimal(12, 2) not null,
    payment_method varchar(20) default 'contado',
    status varchar(20) default 'issued',
    issued_at timestamptz default now()
);

create index if not exists idx_receipts_user_id on public.receipts(user_id);
create index if not exists idx_receipts_issued_at on public.receipts(issued_at desc);
create index if not exists idx_clients_user_id on public.clients(user_id);

alter table public.users enable row level security;
alter table public.clients enable row level security;
alter table public.receipts enable row level security;

drop policy if exists "users can read own row" on public.users;
create policy "users can read own row"
on public.users
for select
using (id = auth.uid());

drop policy if exists "users can insert own row" on public.users;
create policy "users can insert own row"
on public.users
for insert
with check (id = auth.uid());

drop policy if exists "users can update own row" on public.users;
create policy "users can update own row"
on public.users
for update
using (id = auth.uid())
with check (id = auth.uid());

drop policy if exists "clients belong to user" on public.clients;
create policy "clients belong to user"
on public.clients
for all
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "receipts belong to user" on public.receipts;
create policy "receipts belong to user"
on public.receipts
for all
using (user_id = auth.uid())
with check (user_id = auth.uid());
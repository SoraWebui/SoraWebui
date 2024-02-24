# SoraWebui
SoraWebui is an open-source project that simplifies video creation by allowing users to generate videos online with OpenAI's Sora model using text, featuring easy one-click website deployment.
👉 [SoraWebui](https://sorawebui.com)

English | [简体中文](https://github.com/SoraWebui/SoraWebui/blob/login/README.zh-CN.md) | [日本語](https://github.com/SoraWebui/SoraWebui/blob/login/README.ja-JP.md)


# Project Plan
- ✅ Generate video by words(Use [FakeSoraAPI](https://github.com/SoraWebui/FakeSoraAPI)):

  You can see this feature in 👉 [main](https://github.com/SoraWebui/SoraWebui/tree/main) or 👉 [version-0.1](https://github.com/SoraWebui/SoraWebui/tree/version-0.1)

- ✅ Login with Google:

  You can see this feature in 👉 [login](https://github.com/SoraWebui/SoraWebui/tree/login)

- [ ] Stripe payment：

  Coming soon

- [ ] Add OpenAI’s Sora API：

  Waiting for OpenAI launch Sora's API, then we will launch this feature.


## Quick Started

### Deploy on Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSoraWebui%2FSoraWebui%2Ftree%2Flogin&project-name=SoraWebui&repository-name=SoraWebui&external-id=https%3A%2F%2Fgithub.com%2FSoraWebui%2FSoraWebui%2Ftree%2Flogin)

### 1. Clone project

```bash
git clone git@github.com:SoraWebui/SoraWebui.git
```

### 2. Install dependencies

```bash
cd SoraWebui && yarn
#or
cd SoraWebui && npm install
#or
cd SoraWebui && pnpm install
```

### 3. copy .env.example and rename it to .env.local

```bash
# website URL
NEXT_PUBLIC_SITE_URL=http://localhost

# openai config
OPENAI_API_KEY=sk-XXXXXX
OPENAI_API_BASE_URL=http://localhost:8081
OPENAI_API_MODEL=sora-1.0-turbo

# vercel postgres config
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NO_SSL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=

# Google auth config
GOOGLE_CLIENT_ID=
GOOGLE_SECRET_ID=

# NEXTAUTH config
# create command: openssl rand -base64 32
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost

```
### 4. Additional configuration

> a. Google auth config 👉 [Google-Auth-Help](https://github.com/SoraWebui/SoraWebui/blob/login/help/Google-Auth.md)
> b. vercel postgres config 👉 [vercel-postgres-Help](https://github.com/SoraWebui/SoraWebui/blob/login/help/vercel-postgres.md)

### 5. Run it

```bash
yarn dev
#or
npm run dev
#or
pnpm dev
```

### 6. Open [http://localhost](http://localhost) with your browser to see it.
![success_deploy.jpg](https://sorawebui.com/success_deploy.jpg)


# Important
SoraWebui requires [FakeSoraAPI](https://github.com/SoraWebui/FakeSoraAPI) to function properly.


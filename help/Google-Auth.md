### 1. Create a new project on [Google Cloud](https://console.cloud.google.com)
![Create project](https://sorawebui.com/GoogleAuth/1.jpg)

### 2. Go to APIs & Services then Credentials
![Credentials](https://sorawebui.com/GoogleAuth/2.jpg)

### 3. Click [Configure Consent Screen]
![Configure Consent Screen](https://sorawebui.com/GoogleAuth/3.jpg)

### 4. Do not upload App logo to avoid review. (recommend this)
![AppInfo1](https://sorawebui.com/GoogleAuth/4_1.jpg)
![AppInfo2](https://sorawebui.com/GoogleAuth/4_2.jpg)

### 5. Add userinfo.email & userinfo.profile to scope.
![Scope1](https://sorawebui.com/GoogleAuth/5_1.jpg)
![Scope2](https://sorawebui.com/GoogleAuth/5_2.jpg)

### 6. Add yourself as a test user. Then submit.
![test user](https://sorawebui.com/GoogleAuth/6.jpg)

### 7. Go to Credentials and click [+ Create Credentials] then [Oauth Client ID]
![Create Credentials](https://sorawebui.com/GoogleAuth/7.jpg)

### 8. Choose [Web Application].
![Create Credentials](https://sorawebui.com/GoogleAuth/8.jpg)

### 9. Add 4 url to input
Add http://localhost and https://your-domain to Authorized JavaScript origins.
Add http://localhost/api/auth/callback/google and https://your-domain/api/auth/callback/google to Authorized redirect URIs
![Create Credentials](https://sorawebui.com/GoogleAuth/9.jpg)

Click [Create]

### 10. Copy paste the Client ID in GOOGLE_ID and Client Secret in GOOGLE_SECRET to .env.local(GOOGLE_CLIENT_ID、GOOGLE_SECRET_ID)

### 11. Go to [Oauth Consent Screen] and click [Publish App] to publish this to production.

a. If you upload App logo in the fourth step, you need Click [Prepare for verification] and fill the missing information.

b. Google will email you and you will have to reply to start the process. You'll need to have your domain verified with Google Search Console. You can go ahead and do that now.

c. You can already login with Google on localhost. On production, it will work too but show a warning until you're verified (takes a few days).

d. If you don't upload App logo in the fourth step, your app will be ready to use immediately! (recommend this!)

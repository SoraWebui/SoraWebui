### 1. 在 [Google Cloud](https://console.cloud.google.com) 上创建一个新的项目
![Create project](https://sorawebui.com/GoogleAuth/1.jpg)

### 2. 依次点击 APIs & Services、Credentials
![Credentials](https://sorawebui.com/GoogleAuth/2.jpg)

### 3. 点击 [配置同意屏幕]
![配置同意屏幕](https://sorawebui.com/GoogleAuth/3.jpg)

### 4. 请勿上传 App logo，这样可以免审核成为正式项目。 (推荐)
![AppInfo1](https://sorawebui.com/GoogleAuth/4_1.jpg)
![AppInfo2](https://sorawebui.com/GoogleAuth/4_2.jpg)

### 5. 在范围中添加 userinfo.email & userinfo.profile。
![Scope1](https://sorawebui.com/GoogleAuth/5_1.jpg)
![Scope2](https://sorawebui.com/GoogleAuth/5_2.jpg)

### 6. 将你自己添加为测试用户，接着提交。
![test user](https://sorawebui.com/GoogleAuth/6.jpg)

### 7. 进入凭据并点击[+ 创建凭据] 接着点击 [Oauth 客户端 ID]
![Create Credentials](https://sorawebui.com/GoogleAuth/7.jpg)

### 8. 选择 [Web 应用].
![Create Credentials](https://sorawebui.com/GoogleAuth/8.jpg)

### 9. 添加 4 个链接到输入框
添加 http://localhost 和 https://your-domain 到已获授权的 JavaScript 来源
添加 http://localhost/api/auth/callback/google 和 https://your-domain/api/auth/callback/google 到已获授权的重定向 URI

![Create Credentials](https://sorawebui.com/GoogleAuth/9.jpg)

点击 [创建]

### 10. 复制 客户端ID 和 客户端密钥 到.env.local(GOOGLE_CLIENT_ID、GOOGLE_SECRET_ID)

### 11. 进入[配置同意屏幕] 并点击 [发布应用] 将其转为正式应用.

a. 如果您在第四步上传了App logo，则需要点击【准备验证】并填写缺失的信息。

b. Google 会向您发送电子邮件，您必须回复才能开始该过程。您需要使用 Google Search Console 验证您的域名。您现在就可以继续这样做。

c. 您已经可以在本地主机上使用 Google 登录。在生产中，它也可以工作，但会显示警告，直到您经过验证（需要几天）。

d. 如果您没有在第四步上传应用徽标，您的应用程序将立即可以使用！（推荐！）

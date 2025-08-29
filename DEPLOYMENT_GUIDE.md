# Firebase Deployment Guide for DeDi Website

## Prerequisites Completed ✓
- Firebase CLI installed (version 14.11.2)
- Firebase configuration files created:
  - `firebase.json` - Hosting configuration
  - `.firebaserc` - Project configuration
  - `.gitignore` - Ignore unnecessary files

## Steps to Deploy

### 1. Create Firebase Project
Since we're having authentication issues with the CLI, please create the project manually:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: **dedi-website**
4. Follow the setup wizard (you can disable Google Analytics if not needed)
5. Click "Create project"

### 2. Re-authenticate Firebase CLI
Run this command to re-authenticate:
```bash
firebase login
```

If that doesn't work, try:
```bash
firebase login --reauth
```

### 3. Deploy the Website
Once authenticated, deploy your website:
```bash
firebase deploy --only hosting
```

### 4. Access Your Website
After successful deployment, your website will be available at:
- https://dedi-website.web.app
- https://dedi-website.firebaseapp.com

## Alternative: Quick Deploy Without Authentication Issues

If you continue to have authentication issues, you can:

1. Install Firebase locally for this project:
```bash
npm init -y
npm install --save-dev firebase-tools
```

2. Then deploy using npx:
```bash
npx firebase deploy --only hosting
```

## Files in Your Project

- `index.html` - Main website
- `dedi-logo.svg` - Logo file
- `firebase.json` - Firebase hosting configuration
- `.firebaserc` - Firebase project configuration

## Custom Domain (Optional)

To add a custom domain like dedi.global:
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the verification steps
4. Update your DNS records as instructed

## Troubleshooting

### Authentication Issues
- Clear Firebase credentials: `firebase logout`
- Re-login: `firebase login`
- Use a different browser if the auth page doesn't open

### Project Not Found
- Ensure the project exists in Firebase Console
- Check the project ID matches in `.firebaserc`
- Try: `firebase use --add` to select the project

### Deployment Fails
- Check internet connection
- Ensure you have the necessary permissions
- Try: `firebase deploy --debug` for detailed logs

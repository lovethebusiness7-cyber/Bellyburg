# Belly Burg APK: 5 steps (no Android Studio needed)
1. Make a Google Sheet, open Extensions > Apps Script, paste apps-script.gs, deploy as a Web app (anyone), copy the URL.
2. Put that URL in www/index.html where it says PASTE_APPS_SCRIPT_URL_HERE.
3. Create a free GitHub account, make a new repository, upload ALL files in this folder (including .github).
4. Open the repository's Actions tab > "Build APK" > Run workflow. Wait about 5 minutes.
5. Open the finished run > Artifacts > belly-burg-apk. Unzip it to get app-debug.apk and share it or install it on a phone.
For the Google Play Store you need a signed release (AAB) and a Play Developer account. Ask Claude to prepare that.

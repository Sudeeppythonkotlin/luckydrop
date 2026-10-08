LuckyDrop - Day 1
=================
Files
- index.html     : home page (Google login, ticket picker, claim)
- firestore.rules: paste into Firebase > Firestore > Rules > Publish

Setup
1. Firebase console: create project "luckydrop".
2. Authentication > Get started > enable Google.
3. Firestore Database > Create database (production mode, India region).
4. Project settings > Your apps > Web (</>) > copy the firebaseConfig.
5. Paste it into index.html (the firebaseConfig block near the bottom).
6. Paste firestore.rules into Firestore > Rules and Publish.
7. Upload index.html to a GitHub repo, connect it to Netlify.
8. Firebase > Authentication > Settings > Authorized domains > add your
   Netlify address (without https://).

Notes
- TEST_MODE = true lets you claim at any time. Set to false before launch.
- Never upload admin or service-account keys to GitHub.

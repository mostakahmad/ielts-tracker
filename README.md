# StudyTrack – Setup & Deployment Guide

## How data storage works

| Mode | How it activates | Works across devices? |
|------|------------------|-----------------------|
| **Firestore** (recommended) | Fill in `firebase-config.js` | ✅ Yes – any browser, any machine |
| **Local only** | Leave config as-is | ❌ No – only on current browser |

---

## Step 1 – Create a free Firebase project (5 minutes)

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **"Add project"** → give it a name → Continue
3. Disable Google Analytics (optional) → **Create project**

---

## Step 2 – Enable Firestore

1. In the left sidebar → **Build → Firestore Database**
2. Click **"Create database"**
3. Choose **"Start in test mode"** → Next → Select a region → **Enable**

---

## Step 3 – Get your config keys

1. Go to **Project Settings** (⚙️ gear icon, top left)
2. Scroll down to **"Your apps"** → click **`</>`** (Web app icon)
3. Register the app (any nickname) → **Register app**
4. You'll see a `firebaseConfig` object like this:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "my-project.firebaseapp.com",
  projectId: "my-project",
  storageBucket: "my-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

5. Open `firebase-config.js` and **replace the placeholder values** with yours.

---

## Step 4 – Set Firestore security rules

In Firebase Console → **Firestore → Rules**, replace everything with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{pin} {
      allow read, write: if true;
    }
    match /sessions/{sessionId} {
      allow read, write: if true;
    }
  }
}
```

Click **Publish**.

> **Note:** These rules are open (no auth required) which is fine for personal use.
> For a public app, add proper authentication rules later.

---

## Step 5 – Deploy to GitHub Pages

1. Create a new **public** GitHub repository
2. Push all project files:
   ```
   index.html
   style.css
   app.js
   firebase-config.js
   ```
3. Go to **Settings → Pages** → Source: `main` branch → `/root` → **Save**
4. Your app will be live at: `https://your-username.github.io/repo-name`

---

## How the app works across devices

```
Device A (Register)          Firestore Cloud          Device B (Login)
─────────────────            ───────────────          ────────────────
Enter name + PIN    ──────►  Save user (PIN as ID)
                             Save sessions
                                    │
                                    ▼
                             Device B enters PIN ──►  Load user + sessions
                                                      Sync to localStorage
```

- **Every session** is saved to both localStorage (instant) and Firestore (cloud sync)
- **Login from any device** → pulls all your sessions from Firestore
- **Offline?** → localStorage cache is used automatically as fallback
- The **topbar badge** shows `☁ Synced` (Firestore active) or `⚡ Local only`

---

## Project files

```
my-study-tracker/
├── index.html          ← App structure
├── style.css           ← All styling
├── app.js              ← All logic (timer, auth, reports)
├── firebase-config.js  ← YOUR FIREBASE KEYS GO HERE
└── og-image.png        ← Social media preview image
```

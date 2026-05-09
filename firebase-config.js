// ============================================================
//  StudyTrack – Firebase Configuration
//  Steps:
//  1. Go to https://console.firebase.google.com
//  2. Create a new project (free)
//  3. Click "Web app" icon ( </> ) to add a web app
//  4. Copy the firebaseConfig object values below
//  5. In Firestore → Rules → publish these rules:
//
//     rules_version = '2';
//     service cloud.firestore {
//       match /databases/{database}/documents {
//         match /{document=**} { allow read, write: if true; }
//       }
//     }
// ============================================================

// const firebaseConfig = {
//   apiKey:            "PASTE_YOUR_API_KEY",
//   authDomain:        "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
//   projectId:         "PASTE_YOUR_PROJECT_ID",
//   storageBucket:     "PASTE_YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "PASTE_YOUR_SENDER_ID",
//   appId:             "PASTE_YOUR_APP_ID"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBihAt2_AVG62afB6ukAGETSp39m-OYYbI",
  authDomain: "study-tracker-ca861.firebaseapp.com",
  projectId: "study-tracker-ca861",
  storageBucket: "study-tracker-ca861.firebasestorage.app",
  messagingSenderId: "751458119298",
  appId: "1:751458119298:web:5f67c409de62e93a974e9b",
  measurementId: "G-3YJ1D8LM95"
};

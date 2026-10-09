import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// PASTE ONCE: copy these values from the firebaseConfig in your old index.html.
const firebaseConfig = {
  apiKey: "AIzaSyCi6mS4hG4RguOOyAjCjTTfGTP6F3OgGzY",
  authDomain: "luckydrop-33dc0.firebaseapp.com",
  projectId: "luckydrop-33dc0",
  storageBucket: "luckydrop-33dc0.firebasestorage.app",
  messagingSenderId: "208974443068",
  appId: "1:208974443068:web:a9b919247281bce79a0939"
};

export const TEST_MODE = true;   // true = claim any time. Set false before launch.
export const PRIZE = "₹4,999";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// India time (IST = UTC+5:30)
export const istNow = () => new Date(Date.now() + 19800000);
export const todayKey = () => istNow().toISOString().slice(0, 10);
export const istMins = () => { const n = istNow(); return n.getUTCHours() * 60 + n.getUTCMinutes(); };
export const secsToIST = hh => { const n = istNow(); return hh * 3600 - (n.getUTCHours() * 3600 + n.getUTCMinutes() * 60 + n.getUTCSeconds()); };
export const fmt = s => { s = Math.max(0, s); const p = n => String(n).padStart(2, "0"); const h = Math.floor(s / 3600); return (h ? h + ":" : "") + p(Math.floor(s % 3600 / 60)) + ":" + p(s % 60); };

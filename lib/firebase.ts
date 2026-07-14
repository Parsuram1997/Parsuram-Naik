import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBVl0hKvK853GRjfLGF_kZ-X8QZ-PrRV-c",
  authDomain: "parsuram-naik.firebaseapp.com",
  projectId: "parsuram-naik",
  storageBucket: "parsuram-naik.firebasestorage.app",
  messagingSenderId: "996412877635",
  appId: "1:996412877635:web:37c2e475c856495c3fddf6",
  measurementId: "G-6SSPR22V36"
};

// Initialize Firebase
// We use getApps().length to ensure we don't initialize the app multiple times in Next.js
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Analytics is only available on the client side
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };

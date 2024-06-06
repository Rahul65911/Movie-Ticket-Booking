import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCk0BnFsJWBNRFpgVxD8D4yZb9cR9Ph698",
  authDomain: "movie-ticket-booking-39080.firebaseapp.com",
  projectId: "movie-ticket-booking-39080",
  storageBucket: "movie-ticket-booking-39080.appspot.com",
  messagingSenderId: "71799299976",
  appId: "1:71799299976:web:8f815c03921b6e21c5243d",
  measurementId: "G-STX5CT8CPN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
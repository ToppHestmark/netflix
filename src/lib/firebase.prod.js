import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed'

const firebaseConfig = {
  apiKey: "AIzaSyDTLOry3SdrMsZIY7x2kMFvrjaUs2ZNge0",
  authDomain: "netflix-8b0f3.firebaseapp.com",
  databaseURL: "https://netflix-8b0f3.firebaseio.com",
  projectId: "netflix-8b0f3",
  storageBucket: "netflix-8b0f3.appspot.com",
  messagingSenderId: "706056632007",
  appId: "1:706056632007:web:6a7b02331cb7b837c3f0e2"
}

const firebase = Firebase.initializeApp(firebaseConfig)

// seedDatabase(firebase);

export { firebase }
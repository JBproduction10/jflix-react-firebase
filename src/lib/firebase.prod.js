import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDH0EibSzZDq5Vi22a2lY9io6qs8DDvbJA",
  authDomain: "jflix-5f17b.firebaseapp.com",
  databaseURL: '',
  projectId: "jflix-5f17b",
  storageBucket: "jflix-5f17b.appspot.com",
  messagingSenderId: "433816816944",
  appId: "1:433816816944:web:c31c1c0b8e3828afaaccf5"
};
  
const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
  
export { firebase };
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import storage  from 'firebase/storage'; 
import { getFunctions } from "firebase/functions";

 
const firebaseConfig={
  apiKey: "AIzaSyB7ISvc6ROsazaS1kR_k62a4X6LmLVuYlY",
  authDomain: "herakles-hotel.firebaseapp.com",
  databaseURL: "https://herakles-hotel-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "herakles-hotel",
  storageBucket: "herakles-hotel.appspot.com",
  messagingSenderId: "96808840790",
  appId: "1:96808840790:web:024368eae5f9989432d5f7"
};


export const conf=initializeApp(firebaseConfig);
export const firebaseFnk=getFunctions(conf);
export const db=getFirestore(conf);
export const fileStorage=storage; 
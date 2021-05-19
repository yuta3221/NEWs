import Vue from 'vue'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { firestorePlugin } from 'vuefire';


Vue.use(firestorePlugin)


const firebaseApp = firebase.initializeApp({
  // ここにfirebaseのapi情報をコピペします。
  apiKey: "AIzaSyBQaejlWCkak9hwW9hRDtASSmbAdsrjt8k",
  authDomain: "chat-vue-app-fce21.firebaseapp.com",
  projectId: "chat-vue-app-fce21",
  storageBucket: "chat-vue-app-fce21.appspot.com",
  messagingSenderId: "1077293784307",
  appId: "1:1077293784307:web:1590f01ae531267a1c6b86",
  measurementId: "G-XNBP1TQMNT"

});

export const db = firebaseApp.firestore();
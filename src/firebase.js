import firebase from 'firebase/app'
import 'firebase/firestore'//base de datos
import 'firebase/auth'//interaccion con la informacion del usuario

const firebaseConfig = {
  apiKey: "AIzaSyD0oejUoMJtqvGitpGvS_cOq2DXxdpuObo",
  authDomain: "authfirebase-7c755.firebaseapp.com",
  projectId: "authfirebase-7c755",
  storageBucket: "authfirebase-7c755.appspot.com",
  messagingSenderId: "830655016743",
  appId: "1:830655016743:web:074e3bff40f983cda34302"
};

//iniciar firebase

 firebase.initializeApp(firebaseConfig);

 const bd = firebase.firestore();// desde aqui vamos a acceder a la base de datos
 const auth = firebase.auth(); //acceder a la informacion del usuario

 export {
    bd,
    auth
 }
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';

const firebaseConfig = {
    apiKey: "AIzaSyDQEaCuf7U_SJmCglCxgnGi6o38Db53r7I",
    authDomain: "star-20212.firebaseapp.com",
    projectId: "star-20212",
    storageBucket: "star-20212.appspot.com",
    messagingSenderId: "531730559571",
    appId: "1:531730559571:web:285c5c45f29e2f610b8ca6"
  
};

//Funciones getter, que pueden tomar de forma opcional firebaseConfig como parámetro

const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseConfig);
const db = getFirestore(firebaseConfig);

//Para utilizar una característica como monitorear el estado de autenticación se deben importar como funciones individuales, se deben agregar a la importación arriba con , 
//y se deben declarar abajo incluyendo sus parámetros, el primero es el servidor de firebase( ej en el caso de estado de login, se agrega en el import de auth y como servidor se usa auth ) 
//Y el callback devuelve el valor de la función

//Crear usuarios nuevos 
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  //Iniciar sesion usuarios creados
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    //Observador del estado de autenticación (si esta o no logeado)

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("logeado");
  } else {
    console.log("No logeado");
  }
});


//Crear coleccion nueva y doc

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

//Leer toda la colección 
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});



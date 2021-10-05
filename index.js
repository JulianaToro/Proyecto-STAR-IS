//Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDQEaCuf7U_SJmCglCxgnGi6o38Db53r7I",
    authDomain: "star-20212.firebaseapp.com",
    projectId: "star-20212",
    storageBucket: "star-20212.appspot.com",
    messagingSenderId: "531730559571",
    appId: "1:531730559571:web:285c5c45f29e2f610b8ca6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Funciones getter, que pueden tomar de forma opcional firebaseConfig como parámetro
const auth = getAuth();
const db = getFirestore();

//Para utilizar una característica como monitorear el estado de autenticación se deben importar como funciones individuales, se deben agregar a la importación arriba con , 
//y se deben declarar abajo incluyendo sus parámetros, el primero es el servidor de firebase( ej en el caso de estado de login, se agrega en el import de auth y como servidor se usa auth ) 
//Y el callback devuelve el valor de la función

//Añadir datos

var email = document.getElementById('email').value;
var password = document.getElementById("contraseñaentrada").value;

login.addEventListener("click",añadirDatos,false);

function añadirDatos() {
  console.log(email);
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    console.log("WE ARE")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
/*
//Leer datos
const querySnapshot = await getDocs(collection(db, "usuarios"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

//SignOut
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

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

  /*
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

//Crear una cuenta - usuario administrador


//Funcion de login 
function login() {
  // obtain user email and user password from HTML
  var userEmail = document.getElementById("email_field").value; //Modificar desde menú de admin
  var userPass = document.getElementById("password_field").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      //error code
      var errorCode = error.code
      //errod message
      var errorMessage = error.message
      //show error message
      window.alert("Error : " + errorMessage);
  }).then(() => {
      //redirect the user to profile page
      window.location.assign("/profile");
  });
}
/*const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});*/
//const user = firebase.auth().currentUser; -obtiene el usuario que accedio, No-> nulo

//En tus reglas de seguridad de Firebase Realtime Database y Cloud Storage, a partir de la variable auth, 
//puedes obtener el ID del usuario único que accedió y usarlo para controlar a qué datos podrá acceder.


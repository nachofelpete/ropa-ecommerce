import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDRxQQ-6RH25Db4vuEvoLeS76z8HfSBMfU",
    authDomain: "prueba-react-bf5a6.firebaseapp.com",
    databaseURL: "https://prueba-react-bf5a6.firebaseio.com",
    projectId: "prueba-react-bf5a6",
    storageBucket: "prueba-react-bf5a6.appspot.com",
    messagingSenderId: "287686901631",
    appId: "1:287686901631:web:85fbb5ef13c8e3cc0a644a"
  };

  //creamos una función para pasar el objeto userAuth y otros datos (para el sign up)
  export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if(!userAuth) return;

    //userRef es un Reference doc que se cre y se devuelve siempre por firebase
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    console.log(snapShot.exists);

    if(!snapShot.exists) {
       const {displayName, email} = userAuth;
       const createdAt = new Date();

       try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...aditionalData
        })
       } catch (error) {
         console.log('hubo un problema al crear el usuario', error.message);
       }
    }
    return userRef;
  }
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 

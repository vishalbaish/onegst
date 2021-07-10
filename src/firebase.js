import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyATrQg5TBGb5-i7xstO1G_Zb7SparsO89M",
    authDomain: "onegst--demo.firebaseapp.com",
    projectId: "onegst--demo",
    storageBucket: "onegst--demo.appspot.com",
    messagingSenderId: "439097968803",
    appId: "1:439097968803:web:0e7cfecf2c7e70a11e5716"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = db.doc(`users/${user.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { phoneNumber } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        phoneNumber,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

const db = app.firestore();
const auth = app.auth();

export { db, auth };
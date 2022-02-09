import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyInput from '@/components/ui/MyInput.vue';
import MyButton from '@/components/ui/MyButton.vue';
import MyTextarea from '@/components/ui/MyTextarea.vue';
import MyCheckbox from '@/components/ui/MyCheckbox.vue';
import MyRadio from '@/components/ui/MyRadio.vue';
import MySelect from '@/components/ui/MySelect.vue';
import MyDialog from '@/components/ui/MyDialog.vue';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getStorage, ref as stRef, getDownloadURL, uploadBytes } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCNSDlItXy6O0xwi9xgaXCu53955h_8MVY",
    authDomain: "myspa-7f6d8.firebaseapp.com",
    databaseURL: "https://myspa-7f6d8-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "myspa-7f6d8",
    storageBucket: "https://console.firebase.google.com/project/myspa-7f6d8/storage/myspa-7f6d8.appspot.com/",
    messagingSenderId: "720359914382",
    appId: "1:720359914382:web:6326d10cf2d8c94dc882df",
    measurementId: "G-N8PX44900Q"
};
initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    store.commit('user/setAuthUser', user);
    console.log('onAuthStateChanged', user);
});

const path = '/reviews';
const storage = getStorage();
onValue(ref(db, path), (snapshot) => {
    store.commit('reviews/clear');
    const postsObject = snapshot.val();
    for (const [key, value] of Object.entries(postsObject)) {
        store.commit('reviews/addReview', value);
    }
});

const spaceRef = stRef(storage, 'IMG_20180620_171243.jpg');
getDownloadURL(spaceRef).then((url) => {
    console.log('URL', url);
});
uploadBytes(spaceRef).then((url) => {
    console.log('URL', url);
});

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase

//const analytics = getAnalytics(app);
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
app.component('MyInput', MyInput);
app.component('MyButton', MyButton);
app.component('MyTextarea', MyTextarea);
app.component('MyCheckbox', MyCheckbox);
app.component('MyRadio', MyRadio);
app.component('MySelect', MySelect);
app.component('MyDialog', MyDialog);
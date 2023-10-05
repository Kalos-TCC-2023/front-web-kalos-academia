import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getPerformance } from "firebase/performance";


const firebaseConfig = {
    apiKey: "AIzaSyCRNhnb-I9Fg-DEdNST6rOs14axkHj_G38",
    authDomain: "kalos-corp-academia.firebaseapp.com",
    projectId: "kalos-corp-academia",
    storageBucket: "kalos-corp-academia.appspot.com",
    messagingSenderId: "390285906844",
    appId: "1:390285906844:web:4793409faa27b696c4ee59",
    measurementId: "G-23XH0LHKRH"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const perf = getPerformance(app);
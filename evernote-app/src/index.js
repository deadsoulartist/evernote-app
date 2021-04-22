import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//setting firebase firestore
const firebase = require("firebase");
require("firebase/firestore");

// Initialize Firebase
firebase.default.initializeApp({
  apiKey: "AIzaSyDiNuP2EPUpKhLfBDy_PV-9058uFutPvz4",
  authDomain: "mudassir-evernote.firebaseapp.com",
  projectId: "mudassir-evernote",
  storageBucket: "mudassir-evernote.appspot.com",
  messagingSenderId: "697735671609",
  appId: "1:697735671609:web:4afa78c16642828e6c42e8",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

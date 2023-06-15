
import ContactForm from './Components/ContactForm'; 
import { initializeApp } from "firebase/app";


// Add in the firebase details here 

import { getFirestore, collection, getDocs, query, orderBy, limit } from "firebase/firestore";
// import { useParams, Link } from "react-router";
const firebaseConfig = {
  apiKey: "AIzaSyD0pOTf8ypx1kHf89oEnCwSUoDeEGl5rBs",
  authDomain: "reactchat-c3991.firebaseapp.com",
  projectId: "reactchat-c3991",
  storageBucket: "reactchat-c3991.appspot.com",
  messagingSenderId: "896740966457",
  appId: "1:896740966457:web:9e89ab17fe5e16ff8a4de8",
  measurementId: "G-98KYVKB7Q3"
};



const chatApp = initializeApp(firebaseConfig);

const collectionID = "contact"; 


 export const dataBase = getFirestore(chatApp);
const messagesRef = collection(dataBase, collectionID );
const querySnapshot = await getDocs(messagesRef);


function App() {

  return (
    <div className="App">

      <ContactForm/>
    
    </div>
  )
}

export default App

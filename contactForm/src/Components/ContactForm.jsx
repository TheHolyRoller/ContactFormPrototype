
/** 

Okay so let's just talk things through at the moment. 


So now Bing is working on the contact form. 


If that goes through then I can tweak things and use that contact form in the 

project. 


For now I can work on the email signup form. 

Once that is done then I can integrate the search bar and then do the content. 






*/




import React, { useRef, useState, useEffect, useCallback, useContext, useReducer} from "react";

// Import the firebase details here 
import { getFirestore,  getDocs, query, orderBy, limit } from "firebase/firestore";

import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 

import { dataBase } from "../App";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
//   const [recaptchaToken, setRecaptchaToken] = useState()
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  const myId = "contact"; 

  const submitHandler =  async (e) => {
    e.preventDefault(); 

    if(emailRegex.test(email)){

      await  addDoc(collection(dataBase,  myId), {
            // Add in the rest of the inputs here 
            name: name, 
            phone: phone,
            message: message,
            email: email,
            // Add in a timestamp here 
            
            
        }).then(() => {
        
        // Reset all the inputs here 
        //   setInput(""); 
          setMessage("Thank you for contacting us!"); 
          setName(""); 
          setPhone(""); 
          setEmail(""); 
          
          
          
        })
    }
    
  }
  
  
  
  
  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch(formSparkURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });
    alert("Form submitted");
    setSubmitted(true); 
    
  };
  





  return (
    <div className="mainContainer">
    
    <div className="headlineContainer">
      
    <div className="contactHeadline">
    
    We'd Love to Hear from You! 
      
    </div>
      
      
    </div>
                                    {/* ADD IN THE FORM ID HERE  */}
    <form className="form"  onSubmit={submitHandler}>
        
    {submitted ? <div className="submittedMessage">Thanks for reaching out! </div> : <div></div>}
      <div className="form-group">
        {/* <label className="label"  htmlFor="name">Name</label> */}
        <input className="input"
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
      </div>
      
      <div className="form-group">
        {/* <label className="label"  htmlFor="email">Email</label> */}
        <input
            className="input"
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          />
      </div>
      <div className="form-group">
        {/* <label htmlFor="phone">Phone number</label> */}
        <input
        className="input"
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          placeholder="telephone"
          onChange={(e) => setPhone(e.target.value)}
          required
          />
      </div>
      <div className="form-group">
        {/* <label htmlFor="message">Message</label> */}
        <textarea 
        className="message"
          id="message"
          name="message"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          />
      </div>
      <button className="submitButton"  type="submit">Submit</button>
      {/* <ReCAPTCHA class="g-recaptcha" ref={recaptchaRef} data-sitekey={recaptchaKey} onChange={updateRecaptchaToken} /> */}
      
    </form>
    
          </div>
  );
};

export default Form;
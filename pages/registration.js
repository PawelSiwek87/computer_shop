import React, { useState, useRef } from 'react';

import Modal from 'react-modal';
import { useStateContext } from '../context/StateContext';
import Link from "next/link";
import { client } from '../lib/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendContactForm } from './api/sendContactForm';
//const { v4: uuidv4 } = require('uuid');
//import mailjet from 'node-mailjet';
//import mailjet from 'node-mailjet'
//const MAIL_JET_API_KEY = process.env.MAIL_JET_API_KEY;
//const MAIL_JET_SECRET_KEY = process.env.MAIL_JET_SECRET_KEY;
//import { Client, SendEmailV3_1, LibraryResponse } from 'node-mailjet';
//const userNameView = document.getElementById('userNameRegis');//this.document.getElementById('userNameRegis');// document.getElementById('userNameRegis');



const Registration = () => {
	const {userLogin, setUserLogin} = useStateContext();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [userNameClassVal, setUserNameClassVal] = useState('');
  const [emailClassVal, setEmailClassVal] = useState('');
  const [emailAlertMessage, setEmailAlertMessage] = useState('');
  const [passwordClassVal, setPasswordClassVal] = useState('');

  //const userNameView = this//this.document.getElementById('userNameRegis');// document.getElementById('userNameRegis');
/*
  setErrorFor('userName'); //test

  function setErrorFor(input) {
    //if('userName' == input) setUserNameClassVal('errorValidation');
    //const formControl = input.parentElement;
    //const small = formControl.querySelector('small');
    //formControl.className = 'errorValidation';
    //small.innerText = message;
    //input.className = 'errorValidation';
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = '';
  }
  */


  const customStyles = {
    content: {
      width: '550px',
      height: '300px',
      margin: 'auto',
      padding: '80px',
    },
  };
/*
  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
*/

function globalValidation(result){
  let isValid = true;
/*
  if(email! || !password || !username){
    alert("Uzupełnij wszystkie pola!");
    //setUserNameClassVal('errorValidation')
  }else if(ValidateEmail(email) == false){
    console.log("ZŁY URZYTKOWNIK LUB HASŁO");
    alert("Niepoprawny format email!") 
    return false;
 }else if(result && result[0]){ //ddd
   alert("Istnieje już użytkownik z podaną skrzynką email");
   return false;
 }else{
   return true;
 }
*/
  if(!username){
  isValid = false;
  setUserNameClassVal('errorValidation');
  }

 if(!email){
  setEmailClassVal('errorValidation');
  isValid = false;
  setEmailAlertMessage('Email wymagany!');

 }else if(result && result[0]){
  isValid = false;
  setEmailClassVal('errorValidation');
  setEmailAlertMessage('Istnieje już użytkownik z podaną skrzynką email!');
 }else if(ValidateEmail(email) == false){
  isValid = false;
  setEmailClassVal('errorValidation');
  setEmailAlertMessage('Niepoprawny format email!');
  }
if(!password){
  isValid = false;
  setPasswordClassVal('errorValidation');
}
return isValid;

}

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
     {
       return (true)
     }
       return (false)
   }

  const handleSubmit = async (e) => {
    e.preventDefault();



/*
    var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "pawel.siwek87@gmail.com",
      Password : "8f437923-a823-4ba6-aff0-35284109f83d",//"578A37576D4806EDBADD0CFC61F6895748A1",
      To : "pablosen87@o2.pl",
      From : "pawel.siwek87@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );


    Email.send({
      SecureToken :"10cdf827-b5f1-4620-b70e-f1874ea36784", //"8f437923-a823-4ba6-aff0-35284109f83d",//"b44a606d-13ac-46ff-92d3-2646e8edba5d",
      To : "pablosen87@gmail.com",
      From : "pawel.siwek87@gmail.com",
      Subject : "Cześć, tu Paweł",
      Body : "Hej, to ja",
  }).then(
    message => alert(message)
  );
*/
/*
const nodemailer = require("nodemailer");
// Import NodeMailer (after npm install)

async function main() {
// Async function enables allows handling of promises with await

  // First, define send settings by creating a new transporter: 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
    port: 465, // Port for SMTP (usually 465)
    secure: true, // Usually true if connecting to port 465
    auth: {
      user: "pablosen87@gmail.com", // Your email address
      pass: "thglkyxyyirtxujn", // Password (for gmail, your app password)
      // ⚠️ For better security, use environment variables set on the server for these values when deploying
    },
  });
  
  // Define and send message inside transporter.sendEmail() and await info about send from promise:
  let info = await transporter.sendMail({
    from: '"You" <pablosen87@gmail.com>',
    to: "pablosen87@gmail.com",
    subject: "Testing, testing, 123",
    html: `
    <h1>Hello there</h1>
    <p>Isn't NodeMailer useful?</p>
    `,
  });

  console.log(info.messageId); // Random ID generated after successful send (optional)
}

main()
.catch(err => console.log(err));

*/

//
/*
const jwt = require('jsonwebtoken'); //test
const testData = {"data": "lolol", "data2": "lolol"}; //test
const secrete = 'twój_tajny_klucz';
  const accountActivationToken = jwt.sign(testData, secrete ); //dodać tu zawartość konta  {expiresIn: '20m'}
  console.log("accountActivationToken !!!!!!!!")
  console.log(accountActivationToken)
*/


/*
const jwt = require('jsonwebtoken'); //test
  //jwt.sign({data}, "pablo", {expiresIn: '20m'});
  const resToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGF3ZcWCIiwiZW1haWwiOiJwYXdlbC5zaXdlazg3QGdtYWlsLmNvbSIsInN1YmplY3QiOiJOT1dFICEiLCJtZXNzYWdlIjoiaGVqIiwiaWF0IjoxNjg5Nzg3MTg5LCJleHAiOjE2ODk3ODgzODl9.mQIxtNxC8UDLzLYeWIyGOyMIDDzI2B_p7Pd4KSk4Uko";
  jwt.verify(resToken,"pablo", function(err, decodedToken){
      if(err) console.log(err)
    console.log("zdecodowane !!!!!!!!")
    console.log(decodedToken)
    }
  );
*/
  
    let isGlobalValid = true;

    const usersResult = await client.fetch(`*[_type == "user" && email == '${email}']`).then((result) =>{
      isGlobalValid = globalValidation(result);
    });

    if(!isGlobalValid) return;
    
    const submitValue = {name: username, email: email, password: password,  subject: 'Sklep internetowy - weryfikacja konta', message: 'Aktywacja konta' }
    sendContactForm(submitValue); //wysłanie maila
    setIsModal(true);

    //setEmail(userLogin);

    /*  przeniesie do aktywacji konta:
    setUserLogin(userLogin);

	try {
    await AsyncStorage.setItem('login', email);
    console.log('Login ' + email + ' został zapisany w AsyncStorage.');
  } catch (error) {
    console.log('Wystąpił błąd podczas zapisywania loginu:', error);
  }
	

  let newUser = {
    _type: "user",
    userName: username,
    email: email,
    password: password
  }
  console.log('newUser');
  console.log(newUser);

  
    try {
  
    await client.create(newUser);
    console.log('Zapisano w bazie loginu:', newUser);
  } catch (error) {
    console.log('Wystąpił błąd podczas zapisywania loginu w bazie:', error);
  }
  //setUsername('');
    //setEmail('');
    //setPassword('');
	window.location.href = '/'

  */
  //sendMail('Test Name',"pawel.siwek87@gmail.com",'Test wysłania maila','Test Message')

  };

  return (
    <div class='form-container'>
      <h2>Rejestracja użytkownika</h2>
      <form class='form-group' onSubmit={handleSubmit}>
        <div>
          <label>Nazwa użytkownika:</label>
          <input
            type="text"
            //ref={userNameRef}
            class={userNameClassVal}
            value={username}
            onChange={(e) => {setUsername(e.target.value.trim()); setUserNameClassVal('');}}
          />
			    <small class={userNameClassVal}>Nazwa użytkownika wymagana!</small>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            class={emailClassVal}
            value={email}
            onChange={(e) => {setEmail(e.target.value.trim()); setEmailClassVal('');}}
          />
          <small class={emailClassVal}>{emailAlertMessage}</small>
        </div>
        <div>
          <label>Hasło:</label>
          <input
            type="password"
            class={passwordClassVal}
            value={password}
            onChange={(e) => {setPassword(e.target.value.trim()); setPasswordClassVal('');}}
          />
          <small class={passwordClassVal}>Hasło wymagane!</small>
        </div>
        <button type="submit" class='btn' onClick={handleSubmit}>Zarejestruj</button>
      </form>
      <Modal
  isOpen={isModal}
  style={customStyles}
  onClose={() => setIsModal(false)}
  ariaHideApp={false}
    >

<h3>W celu ukonczenia rejestracji aktywuj konto klikając w link aktywycyjny. </h3>
<button class='btn' onClick={() => setIsModal(false)}>Zamknij</button>
    </Modal>

    </div>
  );
};
/*
export const getStaticProps = async () => { //do usunięcia
  const usersQuery = `*[_type == "user"]`
    
    const users = await client.fetch(usersQuery);
    
    return {
      props: { users }
    }
  }
  */

export default Registration;

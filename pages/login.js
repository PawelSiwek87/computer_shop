import React, { useState } from 'react';
import { useStateContext } from '../context/StateContext';
import Link from "next/link";
import { client } from '../lib/client';
import AsyncStorage from '@react-native-async-storage/async-storage';




function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
   {
     return (true)
   }
     return (false)
 }

const Login = () => {
  const {setUserLogin} = useStateContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailClassVal, setEmailClassVal] = useState('');
  const [passwordClassVal, setPasswordClassVal] = useState('');
  const [emailAlertMessage, setEmailAlertMessage] = useState('');

  async function globalValidation(){
    let isValid = true;
  
   if(!email){
    isValid = false;
    setEmailClassVal('errorValidation');
    setEmailAlertMessage('Email wymagany!');
   }
  if(!password){
    isValid = false;
    setPasswordClassVal('errorValidation');
  }

  if(isValid) {
    const usersResult = await client.fetch(`*[_type == "user" && email == '${email}' && password == '${password}']`)
    .then((result) =>{
      if(!result || !result[0]){
        isValid = false;
        setEmailClassVal('errorValidation');
        setEmailAlertMessage('Niepoprawny email lub hasło!');
        //alert("Niepoprawny email lub hasło");

      }
    });
  }
  return isValid;
  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!await globalValidation()) return;

/*
    const usersResult = await client.fetch(`*[_type == "user" && email == '${email}' && password == '${password}']`)
    .then((result) =>{
  
      if(email == "" || password == ""){
        alert("Uzupełnij wszystkie pola!");
      }else if(ValidateEmail(email) == false){
         alert("Niepoprawny format email!"); 
         return false;
      }else if(!result || !result[0]){
        alert("Niepoprawny email lub hasło");
        return false;
      }else{
        return true;
      }

    });
*/
    //if(!usersResult) return;

    //return; //test

    //if(!globalValidation()) return;



    setUserLogin(email);

          try {
            await AsyncStorage.setItem('login', email);
            //console.log('Login został zapisany w AsyncStorage.');
          } catch (error) {
            console.log('Wystąpił błąd podczas zapisywania loginu:', error);
          }
            // Wyczyść formularz po zalogowaniu
            setEmail('');
            setPassword('');
          window.location.href = '/'	
  };

  return (
    <div class='form-container'>
      <h2>Logowanie użytkownika</h2>
      <form class='form-group' onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            class={emailClassVal}
            value={email}
            onChange={(e) => {setEmail(e.target.value); setEmailClassVal('');}}
          />
          <small class={emailClassVal}>{emailAlertMessage}</small>
        </div>
        <div>
          <label>Hasło:</label>
          <input
            type="password"
            class={passwordClassVal}
            value={password}
            onChange={(e) => {setPassword(e.target.value); setPasswordClassVal('');}}
          />
          <small class={passwordClassVal}>Hasło wymagane!</small>
        </div>
        <button type="submit" class="btn" onClick={handleSubmit}>Zaloguj</button>
      </form>
    </div>
  );
};

export default Login;

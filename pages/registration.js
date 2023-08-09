import React, { useState } from "react";
import Modal from "react-modal";
import { client } from "../lib/client";
import { sendContactForm } from "./api/sendContactForm";
import sendEmail from "../lib/sendEmail";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [userNameClassVal, setUserNameClassVal] = useState("");
  const [emailClassVal, setEmailClassVal] = useState("");
  const [emailAlertMessage, setEmailAlertMessage] = useState("");
  const [passwordClassVal, setPasswordClassVal] = useState("");
  const [isModalError, setIsModalError] = useState(false);

  const customStyles = {
    content: {
      width: "550px",
      height: "300px",
      margin: "auto",
      padding: "80px",
    },
  };

  const sendMailByGrid = (data) => {
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({data})
    });
  }

  function globalValidation(result) {
    let isValid = true;

    if (!username) {
      isValid = false;
      setUserNameClassVal("errorValidation");
    }

    if (!email) {
      setEmailClassVal("errorValidation");
      isValid = false;
      setEmailAlertMessage("Email wymagany!");
    } else if (result && result[0]) {
      isValid = false;
      setEmailClassVal("errorValidation");
      setEmailAlertMessage("Istnieje już użytkownik z podaną skrzynką email!");
    } else if (ValidateEmail(email) == false) {
      isValid = false;
      setEmailClassVal("errorValidation");
      setEmailAlertMessage("Niepoprawny format email!");
    }
    if (!password) {
      isValid = false;
      setPasswordClassVal("errorValidation");
    }
    return isValid;
  }

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isGlobalValid = true;

    const usersResult = await client
      .fetch(`*[_type == "user" && email == '${email}']`)
      .then((result) => {
        isGlobalValid = globalValidation(result);
      });

    if (!isGlobalValid) return;

    const submitValue = {
      name: username,
      email: email,
      password: password,
      subject: "Sklep internetowy - weryfikacja konta",
      message: "Aktywacja konta",
    };
    sendContactForm(submitValue).then((result) => {
      setIsModalError(!!result.isError);
      setIsModal(true);
    });
     //wysłanie maila nie możliwe przez vercel
    //zastąpienie sendgrid:
    //sendMailByGrid(submitValue); //test sending
    //sendEmail;  
  };

  return (
    <div className="form-container">
      <h2>Rejestracja użytkownika</h2>
      <form className="form-group" onSubmit={handleSubmit}>
        <div>
          <label>Nazwa użytkownika:</label>
          <input
            type="text"
            class={userNameClassVal}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value.trim());
              setUserNameClassVal("");
            }}
          />
          <small className={userNameClassVal}>Nazwa użytkownika wymagana!</small>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            className={emailClassVal}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.trim());
              setEmailClassVal("");
            }}
          />
          <small className={emailClassVal}>{emailAlertMessage}</small>
        </div>
        <div>
          <label>Hasło:</label>
          <input
            type="password"
            className={passwordClassVal}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value.trim());
              setPasswordClassVal("");
            }}
          />
          <small class={passwordClassVal}>Hasło wymagane!</small>
        </div>
        <button type="submit" class="btn" onClick={handleSubmit}>
          Zarejestruj
        </button>
      </form>
      <Modal
        isOpen={isModal}
        style={customStyles}
        onClose={() => setIsModal(false)}
        ariaHideApp={false}
      >
        {!isModalError ? <h3>
          W celu ukonczenia rejestracji aktywuj konto klikając w link
          aktywacyjny w mailu.
        </h3> : <h3>Coś poszło nie tak. Skontaktuj się z administratorem</h3>}
        <button class="btn" onClick={() => setIsModal(false)}>
          Zamknij
        </button>
      </Modal>
    </div>
  );
};

export default Registration;

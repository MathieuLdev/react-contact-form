import React, { useRef, useState } from "react";
import './style.css';
import emailjs from 'emailjs-com';

function App() {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const isEmail = () => {
    let mail = document.getElementById('wrong-email');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = 'none';
      return true;
    } else {
      mail.style.display = 'block';
      mail.style.animation = "dongle 1s"
      setTimeout(() => {
        mail.style.animation = "none"
      }, 1000);
      return false;
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      
      emailjs.sendForm('service_cltpcqk', 'template_vtd437k', form.current, 'user_yomLsOiO2GIFfKLrISFvC')
      .then((res) => {
        setName("");
        setSurname("");
        setPhone("");
        setEmail("");
        setMessage("");
        document.querySelector('.form-message').innerHTML = "Message envoyé ! Nous vous recontacterons dès que possible."
        setTimeout(() => {
          document.querySelector('.form-message').innerHTML = ""
        }, 5000);
      }, (error) => {
        document.querySelector('.form-message').innerHTML = "Une erreur s'est produite, veuillez réessayer";
        console.log('FAILED...', error);
      });
    } else {
      document.querySelector('.form-message').innerHTML = "Veuillez remplir les champs obligatoires *";
    };
  }



	return (
		<form ref={form} className="form-container" noValidate="novalidate" onSubmit={handleSubmit}>
			<h1>Contactez-nous</h1>
			<div className="form-content">
				<input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Nom *"
          value={name}
          autoComplete="chrome-off"
          onChange={(e) => setName(e.target.value)}
        />
				<input 
          type="text" 
          name="surname" 
          id="surname" 
          placeholder="Prénom" 
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
				<input 
          type="text" 
          name="phone" 
          id="phone" 
          placeholder="Téléphone" 
          value={phone}
          autoComplete="chrome-off"
          onChange={(e) => setPhone(e.target.value)}
        />
				<div className="email-content">
					<label id="wrong-email">email non valide</label>
					<input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="email *" 
            value={email}
            autoComplete="chrome-off"
            onChange={(e) => setEmail(e.target.value)}
          />
				</div>
				<textarea 
          name="message" 
          id="message" 
          placeholder="Message *"
          value={message}
          autoComplete="chrome-off"
          onChange={(e) => setMessage(e.target.value)}>
        </textarea>
			</div>
			<input className="submit" type="submit" value="Valider" />
			<div className="form-message"></div>
		</form>
	);
}

export default App;

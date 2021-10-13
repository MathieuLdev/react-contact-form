import React, { useState } from "react";
import './style.css';

function App() {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

	return (
		<form className="form-container" autoComplete="off">
			<h1>Contactez-nous</h1>
			<div className="form-content">
				<input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Nom *"
          value={name}
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
          onChange={(e) => setPhone(e.target.value)}
        />
				<div className="email-content">
					<label id="wrong-email">email non valide</label>
					<input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
				</div>
				<textarea 
          name="message" 
          id="message" 
          placeholder="Message *"
          value={message}
          onChange={(e) => setMessage(e.target.value)}>
        </textarea>
			</div>
			<input className="submit" type="submit" value="Valider" onClick={handleSubmit} />
			<div className="form-message"></div>
		</form>
	);
}

export default App;

import React from 'react'
import '../../styles/contacts.css'


const Contacts = () => {
    return (
        <div id="main-contacts">
            <h1>Contattaci</h1>
            <h3>Compila la scheda con i tuoi dettagli e ti contatteremo al piu' presto con il metodo da te preferito.</h3>
            <div className="ui large form container">
                <div className="fields">
                    <div className="six wide field">
                        <label>Nome</label>
                        <input type="text" placeholder="Nome" required ></input>
                    </div>
                    <div className="six wide field">
                        <label>E-Mail</label>
                        <input type="text" placeholder="Indirizzo e-mail" required></input>
                    </div>
                </div>
                <div className="fields">
                    <div className="twelve wide field">
                        <label></label>
                        <textarea rows="8" placeholder="Inserisci il testo dell'email qui" required />
                    </div>
                </div>
                <div className="fields">
                <div className="ui submit button">Invia</div>
                </div>

            </div>
        </div>
    )
}

export default Contacts
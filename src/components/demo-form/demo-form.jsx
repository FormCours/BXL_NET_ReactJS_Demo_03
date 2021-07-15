import { useState } from 'react';
import style from './demo-form.module.css';


const DemoForm = (props) => {
    
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [sexe, setSexe] = useState('X');
    const [nbPerson, setNbPerson] = useState('1');
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [newsletterOK, setNewsletterOK] = useState(false);
    const [theme, setTheme] = useState('admin');
    
    const handleNbPerson = (e) => {
        const {value} = e.target;
        
        const regexNbPerson = /^[1-9][0-9]?$/;
        if(value === '' || regexNbPerson.test(value)) {
            setNbPerson(value)
        }

        // const valueNb = parseInt(value)
        // if(value === '' || (!isNaN(valueNb) && valueNb >= 1 && valueNb <= 99)) {
        //     setNbPerson(value)
        // }
    }

    const handleCheckEmail = () => {
        const regexSimpleMail = /^[a-z]([a-z_\-.0-9]*[a-z0-9])?@[a-z]+\.[a-z]{2,3}$/i;
        setEmailValid(email === '' || regexSimpleMail.test(email));
    }

    const handleSubmit = (e) => {
        e.preventDefault();     // Bloque l'actualisation de la page lors du submit
    
        // TODO A completer par la suite par :
        //  - L'envoie une requete Ajax par exemple
        //  - L'envoie vers un autre composant React de l'application

        // Si on souhaite reset le formulaire via l'event du formulaire
        e.target.reset();
    }

    const handleReset = (e) => {
        e.preventDefault();     // Déactivé le reset du formulaire via le navigateur

        // Reset des valeurs contenue dans l'etat local (le state)
        setFirstname('');
        setLastname('');
        setSexe('X');
        setNbPerson('');
        setComment('');
        setEmail('');
        setEmailValid(true);
        setNewsletterOK(false);
        setTheme('admin');
    }

    return (<>
        <h2>Demo form</h2>
        <form className={style.demoForm} onSubmit={handleSubmit} onReset={handleReset}>

            {/* De simple inputs avec du texte */}
            <div>
                <label>Prenom : </label>
                <input type="text" 
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname} />
            </div>
            <div>
                <label>Nom : </label>
                <input type="text"
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname} />
            </div>

            {/* Trois inputs 'radio' lier */}
            <div>
                <label>Sexe : </label>
                <label>
                    <input type="radio"
                        onChange={() => setSexe('F')}
                        checked={sexe === 'F'}/>
                    Femme
                </label>
                <label>
                    <input type="radio"
                        onChange={() => setSexe('H')}
                        checked={sexe === 'H'}/>
                    Homme
                </label>
                <label>
                    <input type="radio"
                        onChange={() => setSexe('X')}
                        checked={sexe === 'X'}/>
                    Neutre
                </label>
            </div>

            {/* Une input restraint a une saisie de nombre */}
            <div>
                <label>Nombre de personne : </label>
                <input type="text"
                    placeholder="De 1 à 99"
                    onChange={handleNbPerson}
                    value={nbPerson} />
            </div>

            {/* une simple textarea avec du text */}
            <div>
                <label>Commentaire : </label>
                <textarea onChange={e => setComment(e.target.value)} value={comment}/>
            </div>

            {/* Input de type email avec une validation à la perte du focus */}
            <div>
                <label>Email : </label>
                <input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    onBlur={handleCheckEmail} />
                {(!emailValid) && (
                    <span> L'email n'est pas valide</span>
                )}
            </div>

            {/* Input de type checkbox */}
            <div>
                <label>Newsletter : </label>
                <input type="checkbox"
                    onChange={(e) => setNewsletterOK(e.target.checked)}
                    checked={newsletterOK} />
            </div>

            {/* Utilisation d'une balise Select */}
            <div>
                <label>Theme : </label>
                <select onChange={(e) => setTheme(e.target.value)} value={theme}>
                    <option value="dev">Developpement</option>
                    <option value="infra">Infrastructure</option>
                    <option value="admin">Administration</option>
                    <option value="other">Autre...</option>
                </select>
            </div>

            <button type="submit">Valider</button>
            <button type="reset">Effacer</button>
        </form>

        <h2>Valeur contenu</h2>
        <p>Les valeurs sont : </p> 
        <ul>
            <li>Person : ... ... ...</li>
            <li>Nb : ...</li>
            <li>Commentaire : ...</li>
            <li>Email : ...</li>
            <li>Newsletter : ...</li>
        </ul>
    </>);
}

export default DemoForm;
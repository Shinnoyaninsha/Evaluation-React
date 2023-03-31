export default function Contact_Form(){
    let commentaire;
    let nom;
    let prenom;
    let email;
    let raison;


    return(
    <div className='contact-recla'>
            <br />
            <br />
            <p className=""> Contactez nous</p>
            <label for="nom">Nom:</label>

        <input type="text" id="nom" name="nom" required size="10" value={nom}/>
        <label for="prenom">Prénom:</label>

        <input type="text" id="prenom" name="prenom" required size="10" value={prenom}/>
        <label for="email">Adresse mail:</label>
        <input type="email" id="email" name="email" required size="10" value={email}/>
        <label for="raisons">Raison de votre demande</label>
<input list="sujets" id="raisons" name="raisons" value={raison}/>
        <label for="commentaire">Un message à nous faire passer ?</label>
        <textarea id="commentaire" value={commentaire} ></textarea>
        <button>Envoyer</button>

<datalist id="sujets">
    <option value="C'était trop bon je voulais vous le dire"/>
    <option value="Réservation"/>
    <option value="Réclamation"/>
    <option value="RDV avec Chantal"/>
</datalist>
</div>)
}
import {Link} from "react-router-dom"

export default function Header(){
    return(<div>
        <header>
<div className="w3-top w3-bar w3-black">
<Link to={''} className="w3-bar-item w3-button">Accueil</Link>
<Link to={'carte'} class="w3-bar-item w3-button">Carte</Link>
<Link to={'Contact'} class="w3-bar-item w3-button">Contact</Link>
</div>
        </header>
    </div>

    )
}


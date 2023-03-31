import {Outlet} from "react-router-dom"
import buttonText from "./Boutons"
export default function Carte(){
    return(
        <div className='carte'>
            <br />
            <br />
            <div className='groupButtons' >
            {buttonText("Entrées")}
            {buttonText("Plats")}
            {buttonText("Desserts")}
            {buttonText("Boissons")}
            </div>
            <Outlet/>
        </div>
    )
}
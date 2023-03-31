import dataCarte from "../Components/DataCarte"

export default function Boissons(){
    const carte=dataCarte;     
    
    return(
        <div>
            <ul>
            {carte.map((plat)=>{
            if (plat.category==="Boisson"){
                return(
                    <li><span>{plat.name}</span> <span>{plat.prix}</span></li>
                    )
            }
        })} 
            </ul>
        </div>
    )
}
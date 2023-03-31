import dataCarte from "../Components/DataCarte"

export default function Plats(){
    const carte=dataCarte;     
    
    return(
        <div>
            <ul>
            {carte.map((plat)=>{
            if (plat.category==="Plats"){
                return(
                    <li><span>{plat.name}</span> <span>{plat.prix}</span></li>
                    )
            }
        })} 
            </ul>
        </div>
    )
}
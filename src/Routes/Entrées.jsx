import dataCarte from "../Components/DataCarte"

export default function Entrées(){
    const carte=dataCarte;     
    
    return(
        <div>
            <ul>
            {carte.map((plat)=>{
            if (plat.category==="Entrée"){
                return(
                    <li><span>{plat.name}</span> <span>{plat.prix}</span></li>
                    )
            }
        })} 
            </ul>
        </div>
    )
}
import dataCarte from "../Components/DataCarte"

export default function Tout(){
    const carte=dataCarte;     
    
    return(
        <div>
            <ul>
            {carte.map((plat)=>{
                return(
                    <li><span>{plat.name}</span> <span>{plat.prix}</span></li>
                    )
            }
        )} 
            </ul>
        </div>
    )
}
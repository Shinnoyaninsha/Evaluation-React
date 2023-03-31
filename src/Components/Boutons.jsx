import {Link} from "react-router-dom"

export default function buttonText(category){
    return(
        <div>
            <Link to={category} className='buttons'>{category}</Link>
        </div>
    )
}
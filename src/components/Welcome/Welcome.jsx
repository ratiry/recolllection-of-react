
import { useNavigate } from "react-router-dom";
import classes from "./Welcome.module.scss";

let Welcome=(props)=>{
    const navigate=useNavigate();
    return(
        <div>
            <h1>I remembered react!</h1>
            <button onClick={()=>{navigate("/Counter")}}>Counter</button>
        </div>
    )
}
export default Welcome;
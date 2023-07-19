import classes from "./P.module.scss";
const P = (props)=>{
    return(
        <div className={classes.P}>
            <p>{props.children}</p>
        </div>
    )
}
export default P;
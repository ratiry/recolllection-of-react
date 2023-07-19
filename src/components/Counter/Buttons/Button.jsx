import classes from "./Button.module.scss";
let Button = (props)=>{
    if(props.position =="down"){
        return(
            <div className={classes.Button + " " + classes.down}  onClick={props.onClick}>
                {props.children}
            </div>
        )
    }else{
        return(
            <div className={classes.Button+ " " + classes.up } onClick={props.onClick}>
                {props.children}
            </div>
        )
    }
}
export default Button;
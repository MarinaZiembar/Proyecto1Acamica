

const Input = props =>{

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

    return(
        <div>
            <label for={props.tag}>Fecha de {props.name} </label>
           {props.tag==="fsalida" ? (<input type="date" min={props.value2} id={props.tag} name={props.tag} value={props.value} onChange={props.handleInputChange} />):(<input type="date" min={today} id={props.tag} name={props.tag} value={props.value} onChange={props.handleInputChange} />)} 
        </div>
    )
}

export default Input;
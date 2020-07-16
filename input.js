

const Input = props =>{

    const{tag, name, value, value2, handleInputChange}=props

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    return(
        <div>
            <label htmlFor={tag}>Fecha de {name} </label>
            {tag==="fsalida" ?
            (<input type="date" min={value2} id={tag} name={tag} value={value} onChange={handleInputChange} />):
            (<input type="date" min={today} id={tag} name={tag} value={value} onChange={handleInputChange} />
            )} 
        </div>
    )
}

export default Input;


const Input = props =>{
    return(
        <div>
            <label for={props.name}>Fecha de entrada</label>
            <input type="date" id={props.name} name={props.name} value={props.value} onChange={props.handleInputChange} />
        </div>
    )
}

export default Input;
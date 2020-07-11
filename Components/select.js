

const Select = props =>{
    return (
        <div>
            <select onChange={props.handleInputChange} name={props.name} id={props.name}>
            <option value={props.name} selected disabled>Cualquier {props.name}</option>
            <option value={props.first}>{props.first}</option>
            <option value={props.second}>{props.second}</option>
            <option value={props.third}>{props.third}</option>
            {!props.fourth ? "" : (<option value={props.fourth}>{props.fourth}</option>)} 
            </select>
        </div>
    )
}

export default Select;
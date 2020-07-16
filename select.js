

const Select = props =>{

    const{name, handleInputChange, options}=props

    return (
        <div>
            <select onChange={handleInputChange} name={name} id={name}>   
            {options.map(option=>(
            <option key={options.indexOf(option)} value={option}>{option}</option>
            ))} 
            </select>
        </div>
    )
}

export default Select;
import Select from './select.js'
import Input from './input.js'

const Filters = props =>{

        return(
            <div className='filtro1'>
                <div className='filtro2'>
                <h1>Hoteles</h1>
                <form className='filtro3'>
                    <Input tag="fentrada" name="entrada" handleInputChange={props.handleInputChange} value={props.fentrada} />
                    <Input tag="fsalida" name="salida" handleInputChange={props.handleInputChange} value={props.fsalida}  value2={props.fentrada}/>
                    <Select name="pais" handleInputChange={props.handleInputChange} first="Argentina" second="Brasil" third="Chile" fourth="Uruguay"/>
                    <Select name="precio" handleInputChange={props.handleInputChange} first="$" second="$$" third="$$$" fourth="$$$$"/>
                    <Select name="tamaño" handleInputChange={props.handleInputChange} first="Hotel Pequeño" second="Hotel Mediano" third="Hotel Grande" />
                </form>
                </div>
            </div>
        )
};

export default Filters;
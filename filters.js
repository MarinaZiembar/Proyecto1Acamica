import Select from './select.js'
import Input from './input.js'

const Filters = props =>{
    
    const{fentrada, fsalida, handleInputChange}=props

        return(
            <div className='filtro1 animate__animated animate__fadeIn'>
                <div className='filtro2'>
                    <h1>Hoteles</h1>
                    <form className='filtro3'>
                        <Input 
                        handleInputChange={handleInputChange} 
                        name="entrada" 
                        tag="fentrada" 
                        value={fentrada} />

                        <Input 
                        handleInputChange={handleInputChange} 
                        name="salida" 
                        tag="fsalida" 
                        value={fsalida} 
                        value2={fentrada}/>

                        <Select 
                        handleInputChange={handleInputChange} 
                        name="pais" 
                        options={["Cualquier pais","Argentina","Brasil","Chile","Uruguay"]} />

                        <Select 
                        handleInputChange={handleInputChange} 
                        name="precio" 
                        options={["Cualquier precio","$","$$","$$$","$$$$"]}/>

                        <Select 
                        handleInputChange={handleInputChange} 
                        name="tamaño" 
                        options={["Cualquier tamaño","Hotel Pequeño","Hotel Mediano","Hotel Grande"]} />
                    </form>
                </div>
            </div>
        )
};

export default Filters;
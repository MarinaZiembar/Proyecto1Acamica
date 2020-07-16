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
                        tag="fentrada" 
                        name="entrada" 
                        handleInputChange={handleInputChange} 
                        value={fentrada} />

                        <Input 
                        tag="fsalida" 
                        name="salida" 
                        handleInputChange={handleInputChange} 
                        value={fsalida} 
                        value2={fentrada}/>

                        <Select 
                        name="pais" 
                        handleInputChange={handleInputChange} 
                        options={["Cualquier pais","Argentina","Brasil","Chile","Uruguay"]} />

                        <Select 
                        name="precio" 
                        handleInputChange={handleInputChange} 
                        options={["Cualquier precio","$","$$","$$$","$$$$"]}/>

                        <Select 
                        name="tamaño" 
                        handleInputChange={handleInputChange} 
                        options={["Cualquier tamaño","Hotel Pequeño","Hotel Mediano","Hotel Grande"]} />
                    </form>
                </div>
            </div>
        )
};

export default Filters;
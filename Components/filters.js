import Select from './select.js'
import Input from './input.js'

class Filters extends React.Component{

    state = {
        fentrada: "",
        fsalida: "",
        pais: "",
        precio:"",
        tamaño:""
      };

    handleInputChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    };

    render(){
        return(
            <div className='filtro1'>
                <div className='filtro2'>
                <h1>Hoteles</h1>
                <form className='filtro3'>
                    <Input name="fentrada" handleInputChange={this.handleInputChange} value={this.state.fentrada} />
                    <Input name="fsalida" handleInputChange={this.handleInputChange} value={this.state.fsalida} />
                    <Select name="pais" handleInputChange={this.handleInputChange} first="Argentina" second="Brasil" third="Chile" fourth="Uruguay"/>
                    <Select name="precio" handleInputChange={this.handleInputChange} first="$" second="$$" third="$$$" fourth="$$$$"/>
                    <Select name="tamaño" handleInputChange={this.handleInputChange} first="Hotel Pequeño" second="Hotel Mediano" third="Hotel Grande" />
                </form>
                </div>
            </div>
        )
    };
};

export default Filters;
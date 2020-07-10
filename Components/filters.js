

class Filters extends React.Component{

    state = {
        fentrada: "",
        fsalida: "",
        pais: "",
        precio:"",
        habitaciones:""
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
                    <label for="fentrada">Fecha de entrada</label>
                    <input type="date" id="fentrada" name="fentrada" value={this.state.fentrada} onChange={this.handleInputChange} />
                    <label for="fsalida">Fecha de salida</label>
                    <input type="date" id="fsalida" name="fsalida" value={this.state.fsalida} onChange={this.handleInputChange} />
                    <select onChange={this.handleInputChange} name="pais" id="pais">
                        <option value="default1" selected disabled>Cualquier pais</option>
                        <option value="argentina">Argentina</option>
                        <option value="brasil">Brasil</option>
                        <option value="chile">Chile</option>
                        <option value="uruguay">Uruguay</option>
                    </select>
                    <select onChange={this.handleInputChange} name="precio" id="precio">
                        <option value="default2" selected disabled>Cualquier precio</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                    </select>
                    <select onChange={this.handleInputChange} name="habitaciones" id="habitaciones">
                        <option value="default3" selected disabled>Cualquier tamaño</option>
                        <option value="pequeño">Hotel pequeño</option>
                        <option value="mediano">Hotel mediano</option>
                        <option value="grande">Hotel grande</option>
                    </select>
                </form>
                </div>
            </div>
        )
    };
};

export default Filters;


class Filters extends React.Component{
    state={
        fentrada:" ",
        fsalida:" ",
        pais:"default1",
        precio:"default2",
        habitaciones:"default3",
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
                    <input type="date" id="fsalida" name="fsalida" value={this.state.fsalida} onChange={this.handleInputChange}/>
                    <select name="pais" id="pais">
                        <option onClick={this.handleInputChange} value="default1" selected disabled>Cualquier pais</option>
                        <option onClick={this.handleInputChange} value="argentina">Argentina</option>
                        <option onClick={this.handleInputChange} value="brasil">Brasil</option>
                        <option onClick={this.handleInputChange} value="chile">Chile</option>
                        <option onClick={this.handleInputChange} value="uruguay">Uruguay</option>
                    </select>
                    <select name="precio" id="precio">
                        <option onClick={this.handleInputChange} value="default2" selected disabled>Cualquier precio</option>
                        <option onClick={this.handleInputChange} value="1">$</option>
                        <option onClick={this.handleInputChange} value="2">$$</option>
                        <option onClick={this.handleInputChange} value="3">$$$</option>
                        <option onClick={this.handleInputChange} value="4">$$$$</option>
                    </select>
                    <select name="habitaciones" id="habitaciones">
                        <option onClick={this.handleInputChange} value="default3" selected disabled>Cualquier tamaño</option>
                        <option onClick={this.handleInputChange} value="pequeño">Hotel pequeño</option>
                        <option onClick={this.handleInputChange} value="mediano">Hotel mediano</option>
                        <option onClick={this.handleInputChange} value="grande">Hotel grande</option>
                    </select>
                </form>
                </div>
            </div>
        )
    };
};

export default Filters;
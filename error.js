
class Error extends React.Component{
    render(){
        return(
            <div className="error animate__animated animate__zoomIn">
                <div className="error2"><img src="./images/binoculars.png" alt="ups"/><h3>UPS!</h3></div>
                <p>No encontramos hoteles que <br></br>coincidan con tu búsqueda.</p>
                <h4>Probá de nuevo modificando los filtros.</h4>
            </div>
        )
    }
}

export default Error;
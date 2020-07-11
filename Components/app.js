import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'
import "../styles.css"


class App extends React.Component{
    state = {
        fentrada: "",
        fsalida: "",
        pais: "",
        precio:"",
        tamaño:"",
      };

    handleInputChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    };

    render(){
        return(
            <div>
                <Header fentrada={this.state.fentrada} fsalida={this.state.fsalida}/>
                <Main handleInputChange={this.handleInputChange} fentrada={this.state.fentrada} fsalida={this.state.fsalida} pais={this.state.pais} precio={this.state.precio} tamaño={this.state.tamaño} />    
                <Footer/>
            </div>
        )
    };
};


const rootElement = document.getElementById("app");
ReactDOM.render(<App />,rootElement);
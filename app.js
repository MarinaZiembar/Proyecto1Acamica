import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'
import "./styles.css"


const App = props =>{

        return(
            <div>
                <Header fentrada={props.fentrada} fsalida={props.fsalida}/>
                <Main handleInputChange={props.handleInputChange} fentrada={props.fentrada} fsalida={props.fsalida} pais={props.pais} precio={props.precio} tamaño={props.tamaño} />    
                <Footer/>
            </div>
        )
    };


export default App;
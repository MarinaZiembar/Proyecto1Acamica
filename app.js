import Header from './header.js'
import Filters from './filters.js'
import Footer from './footer.js'
import "./styles.css"


const App = props =>{

        return(
            <div>
                <Header fentrada={props.fentrada} fsalida={props.fsalida}/>
                <Filters handleInputChange={props.handleInputChange} fentrada={props.fentrada} fsalida={props.fsalida} />   
                <Footer/>
            </div>
        )
    };


export default App;
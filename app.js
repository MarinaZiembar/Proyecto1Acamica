import Header from './header.js'
import Filters from './filters.js'
import Footer from './footer.js'
import "./styles.css"


const App = props =>{

        const{fentrada, fsalida, handleInputChange}=props

        return(
            <div>
                <Header 
                fentrada={fentrada} 
                fsalida={fsalida}/>

                <Filters 
                handleInputChange={handleInputChange} 
                fentrada={fentrada} 
                fsalida={fsalida} />  
                 
                <Footer/>
            </div>
        )
    };


export default App;
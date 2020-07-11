import Header from './header.js'
import FilterInfo from './filterInfo.js'
import Filters from './filters.js'
import CardsList from './cardsList.js'
import Footer from './footer.js'
import "../styles.css"


class App extends React.Component{
    render(){
        return(
            <div>
                <div className='top'>
                    <Header/>
                    <FilterInfo/>
                </div>
                <div className='main'>
                    <Filters/>
                    <CardsList/>
                </div>    
                <Footer/>
            </div>
        )
    };
};


const rootElement = document.getElementById("app");
ReactDOM.render(<App />,rootElement);
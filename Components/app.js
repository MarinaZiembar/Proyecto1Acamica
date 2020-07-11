import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'
import "../styles.css"


class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Main/>    
                <Footer/>
            </div>
        )
    };
};


const rootElement = document.getElementById("app");
ReactDOM.render(<App />,rootElement);
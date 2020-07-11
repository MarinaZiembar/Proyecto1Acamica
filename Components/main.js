import Filters from './filters.js'
import CardsList from './cardsList.js'

class Main extends React.Component{
    render(){
        return (
            <div className="main">
                <Filters/>
                <CardsList/>
            </div>
        )
    }
}

export default Main;
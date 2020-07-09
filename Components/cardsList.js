import Cards from './cards.js'
import data from '../data.js'

class CardsList extends React.Component{
    render(){
        return(
            <div className="cardsList">
                <Cards />
            </div>
        )
    };
};

export default CardsList;
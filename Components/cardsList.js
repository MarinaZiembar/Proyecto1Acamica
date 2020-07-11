import Cards from './cards.js';
import hotelsData from './data.js';
import Filters from './filters.js';

class CardsList extends React.Component{
    render(){
        return(
            <div className="cardsList">
                {
                hotelsData.map(card => (<Cards name={card.name} city={card.city} country={card.country} rooms={card.rooms} price={card.price} lon={card.lon} lat={card.lat} photo={card.photo} description={card.description} />))
                }
            </div>
        )
    };
};

export default CardsList;

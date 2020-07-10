import Cards from './cards.js';
import hotelsData from '../data.js';

class CardsList extends React.Component{

    state={
        filtros:[
            {id:1, value:" "},
            {id:2, value:" "},
            {id:3, value:"default1"},
            {id:4, value:"default2"},
            {id:5, value:"default3"}
        ]
    };

    render(){
        const { filtros } = this.state;
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

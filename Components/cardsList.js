import Cards from './cards.js';
import hotelsData from '../data.js';

class CardsList extends React.Component{

    state={
        estados:[
            {id:1, fentrada:" "},
            {id:2, fsalida:" "},
            {id:3, pais:"default1"},
            {id:4, precio:"default2"},
            {id:5, habitaciones:"default3"}
        ]

    };

    render(){
        const { estados } = this.state;
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

import Like from './like.js';
import Price from './price.js';

const Cards = props => { 

        return(
            <div className='card'>
                <div className='cardleft'>
                    <img src={props.photo} alt='hotel'/>
                </div>
                <div className='cardright1'>
                    <div className='cardright2'>
                        <h3>{props.name}</h3>
                        <Like/> 
                    </div>
                    <h4>{props.city}, {props.country}</h4>
                    <h5>{props.rooms} Habitaciones</h5>
                    <p>{props.description}</p>  
                    <div className='cardright3'>
                    <Price cost={props.price}/>
                    <button type='button'>RESERVAR</button>
                    </div>
                </div>
            </div>
        )
};

export default Cards;
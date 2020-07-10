import Like from './like.js';
import hotelsData from '../data.js'

const Cards = props => {
        return(
            <div className='card'>
                <div className='cardleft'>
                    <img src={props.photo} alt='hotel'/>
                </div>
                <div className='cardcenter1'>
                    <h3>{props.name}</h3>
                    <h4>{props.city},{props.country}</h4>
                    <h5>{props.rooms} Habitaciones</h5>
                    <p>{props.description}</p>  
                    <div className='cardcenter2'>
                    <img src='../images/price.png' alt='price'/>
                    <button type='button'>RESERVAR</button>
                    </div>
                </div>
                <div className='cardright'>
                    {/* <Like/> */}
                </div>
            </div>
        )
};

export default Cards;
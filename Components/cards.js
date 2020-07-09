import Like from './like.js';

class Cards extends React.Component{
    render(){
        return(
            <div className='card'>
                <div className='cardleft'>
                    <img src='' alt='hotel'/>
                </div>
                <div className='cardcenter'>
                    <h3>Titulo</h3>
                    <h4>location</h4>
                    <p>rooms</p>
                    <p>Descripción</p>  
                    logica de imagens
                </div>
                <div className='cardright'>
                    {/* <Like/> */}
                    <button type='button'>Reservar</button>
                </div>
            </div>
        )
    }
};

export default Cards;
import Like from './like.js'

class Cards extends React.Component{
    render(){
        return(
            <div className='card'>
                <div className='cardleft'>
                    <img src='' alt=''/>
                </div>
                <div className='cardcenter'>
                    <h3>Titulo</h3>
                    <p>Descripción</p>
                    <div><img src='' alt='location'/><p>location</p></div>  
                    <div><img src='' alt='rooms'/><p>rooms</p></div> 
                    <div><img src='' alt='price'/><p>price</p></div> 
                </div>
                <div className='cardright'>
                    <Like/>
                    <button type='button'>Reservar</button>
                </div>
            </div>
        )
    }
};

export default Cards;
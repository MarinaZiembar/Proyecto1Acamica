import hotelsData from './data.js'
import './styles.css'


 
class Map extends React.Component{
    render(){

        mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaW5hemV0YSIsImEiOiJja2Njc2p2bmkwN3ByMnVxa3I3djhvbmR5In0.OEvxtbTXnnIHjWxjhqye4w';
        let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/marinazeta/ckcdovcle063x1ipiu3yc5a2l',
        center: [-71.919281,-31.9401036],
        zoom: 3,
        minZoom:3,
        });

        //Inhabilitadores de movilidad
        map.boxZoom.disable();
        map.scrollZoom.disable();
        map.dragPan.disable();
        map.dragRotate.disable();
        map.doubleClickZoom.disable();

        let array=[1,2,3,4];

        var points= hotelsData.map(card=>(new mapboxgl.Marker({color: '#F37337'})
        .setPopup(new mapboxgl.Popup({closeButton:false}).setHTML('<div class="card"><div class="cardleft"><img src='+card.photo+' alt="hotel"/></div><div class="cardright1"><div class="cardright2"><h3>'+card.name+'</h3></div><h4>'+card.city+', '+ card.country+'</h4><h5>'+card.rooms+' Habitaciones</h5><p>'+card.description+'</p><div class="cardright3"><div>'+ (array.filter(num => num <= card.price)).map(sign => ('<img src="./images/price.png" alt="price"/>')) +'</div><div><button type="button">RESERVAR</button>)</div></div></div>'))
        .setLngLat([card.lon, card.lat])
        .addTo(map)))


        return(
            <div>
                {points}
            </div>
        )
    }
}

export default Map;

const rootElement = document.getElementById("map");
ReactDOM.render(<Map />,rootElement);






//Puntos de busqueda



//PARA AJUSTAR UN PUNTO
// var puntosFit = document.getElementById('form').addEventListener('onchange', function() {
//     map.fitBounds([ hotelsData.map(point=>([point.lon,point.lat]))
//     ]);
//     });


//PARA IR HASTA UN PUNTO 

// document.getElementById('fly').addEventListener('click', function() {
//     // Fly to a random location by offsetting the point lon, lat
//     // by up to 5 degrees.
//     map.flyTo({
//     center: [
//     -74.5 + (Math.random() - 0.5) * 10,
//     40 + (Math.random() - 0.5) * 10
//     ],
//     essential: true // this animation is considered essential with respect to prefers-reduced-motion
//     });
//     });


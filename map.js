import hotelsData from './data.js'
import App from './app.js'
import Error from './error.js'
import './styles.css'


 
class Map extends React.Component{

    state = {
        fentrada: "",
        fsalida: "",
        pais: "pais",
        precio:"precio",
        tamaño:"tamaño",
        error:false,
      };

    handleInputChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    };


    render(){

        const{fentrada, fsalida, pais, precio, tamaño}=this.state

        //Mapbox Init
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
        map.dragRotate.disable();
        map.doubleClickZoom.disable();
        
        //Logica de puntos en el mapa y tarjetas
        let array=[1,2,3,4];

        const fechaentrada=Date.parse(new Date(fentrada));
        const fechasalida=Date.parse(new Date(fsalida));

        let filtrofechas=hotelsData.filter(result=>(result.availabilityFrom<=fechaentrada&&result.availabilityTo>=fechasalida)||(fentrada===""&&fsalida===""));

        let filtropais=filtrofechas.filter(result=>((result.country===pais||pais==="pais")))

        let filtrotamaño=filtropais.filter(result=>(((tamaño==="Hotel Pequeño"&&result.rooms<=10)||(tamaño==="Hotel Mediano"&&result.rooms>=11&&result.rooms<=20)||(tamaño==="Hotel Grande"&&result.rooms>=21)||tamaño==="tamaño")))

        let filtroprecio=filtrotamaño.filter(result=>(((precio==="$"&&result.price===1)||(precio==="$$"&&result.price===2)||(precio==="$$$"&&result.price===3)||(precio==="$$$$"&&result.price===4)||precio==="precio")))

        let points= filtroprecio.map(card=>(new mapboxgl.Marker({color: '#F37337'})
        .setPopup(new mapboxgl.Popup({closeButton:false}).setHTML('<div class="card"><div class="cardleft"><img src='+card.photo+' alt="hotel"/></div><div class="cardright1"><div class="cardright2"><h3>'+card.name+'</h3></div><h4>'+card.city+', '+ card.country+'</h4><h5>'+card.rooms+' Habitaciones</h5><p>'+card.description+'</p><div class="cardright3"><div>'+ (array.filter(num => num <= card.price)).map(sign => ('<img src="./images/price.png" alt="price"/>')) +'</div><div><button type="button">RESERVAR</button>)</div></div></div>'))
        .setLngLat([card.lon, card.lat])
        .addTo(map)))


        return(
            <div className="app">
                 
                <App handleInputChange={this.handleInputChange} fentrada={this.state.fentrada} fsalida={this.state.fsalida} pais={this.state.pais} precio={this.state.precio} tamaño={this.state.tamaño} />

            </div>
        )
    }
}


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


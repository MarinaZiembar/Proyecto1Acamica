import hotelsData from './data.js'
import App from './app.js'
import Error from './error.js'
import './styles.css'


//Está muy desprolijo porque necesité hacer algunas trampas para que la API de Mapbox funcione con este Setup.

 
class Map extends React.Component{

    state = {
        fentrada: "",
        fsalida: "",
        pais: "Cualquier pais",
        precio:"Cualquier precio",
        tamaño:"Cualquier tamaño",
      };

    handleInputChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    };


    render(){

        const{fentrada, fsalida, pais, precio, tamaño}=this.state

        //Mapbox Init (Está en render() y no en componentDidMount() porque Mapbox no me renderiza el mapa a menos que esté así. )
        mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaW5hemV0YSIsImEiOiJja2Njc2p2bmkwN3ByMnVxa3I3djhvbmR5In0.OEvxtbTXnnIHjWxjhqye4w';
        let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/marinazeta/ckcdovcle063x1ipiu3yc5a2l',
        center: [-71.919281,-31.9401036],
        zoom: 3,
        minZoom:3,
        });

        //Inhabilitadores de movilidad (Está en render() y no en componentDidMount() porque Mapbox no me renderiza el mapa a menos que esté así. )
        map.boxZoom.disable();
        map.scrollZoom.disable();
        map.dragRotate.disable();
        map.doubleClickZoom.disable();

        
        //Logica de puntos en el mapa y tarjetas (a partir de lo que requiere Mapbox, según la documentación de la API) y filtros
        let array=[1,2,3,4];

        const fechaentrada=Date.parse(new Date(fentrada));
        const fechasalida=Date.parse(new Date(fsalida));

        let filtrofechas=hotelsData.filter(result=>
            (result.availabilityFrom<=fechaentrada&&
            result.availabilityTo>=fechasalida)||
            (fentrada===""||fsalida==="")
            );

        let filtropais=filtrofechas.filter(result=>
            (result.country===pais||pais==="Cualquier pais")
            );

        let filtrotamaño=filtropais.filter(result=>
            ((
            (tamaño==="Hotel Pequeño"&&result.rooms<=10)||
            (tamaño==="Hotel Mediano"&&result.rooms>=11&&result.rooms<=20)||
            (tamaño==="Hotel Grande"&&result.rooms>=21)||
            tamaño==="Cualquier tamaño"))
            );

        let filtroprecio=filtrotamaño.filter(result=>
            ((
            (precio==="$"&&result.price===1)||
            (precio==="$$"&&result.price===2)||
            (precio==="$$$"&&result.price===3)||
            (precio==="$$$$"&&result.price===4)||
            precio==="Cualquier precio"))
            );


        let points= filtroprecio.map(card=>(
            new mapboxgl.Marker({color: '#f0871c'})
                .setPopup(new mapboxgl.Popup({closeButton:false})
                .setHTML('<div class="card animate__animated animate__fadeIn"><div class="cardleft"><img src='+card.photo+' alt="hotel"/></div><div class="cardright1"><div class="cardright2"><h3>'+card.name+'</h3></div><h4>'+card.city+', '+ card.country+'</h4><h5>'+card.rooms+' Habitaciones</h5><p>'+card.description+'</p><div class="cardright3"><div>'+ (array.filter(num => num <= card.price)).map(sign => ('<img src="./images/price.png" alt="price"/>')) +'</div><div><button type="button">RESERVAR</button></div></div></div>'))
                .setLngLat([card.lon, card.lat])
                .addTo(map)
        ));


        return(

            <div className="app">

                <App 
                handleInputChange={this.handleInputChange} 
                fentrada={fentrada} 
                fsalida={fsalida} 
                pais={pais} 
                precio={precio} 
                tamaño={tamaño} />

                {(points.length===0) && <Error/>}

            </div>
        )
    }
}


const rootElement = document.getElementById("map");
ReactDOM.render(<Map />,rootElement);



//Mapbox Init
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaW5hemV0YSIsImEiOiJja2Njc2p2bmkwN3ByMnVxa3I3djhvbmR5In0.OEvxtbTXnnIHjWxjhqye4w';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/marinazeta/ckcdovcle063x1ipiu3yc5a2l'
});

//Inhabilitadores de movilidad
map.boxZoom.disable();
map.scrollZoom.disable();
map.dragPan.disable();
map.dragRotate.disable();
map.doubleClickZoom.disable();


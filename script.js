function initMap() {
    // Coordenadas del lugar que deseas mostrar en el mapa
    var myLatLng = {lat: 40.7128, lng: -74.0060};

    // Crea un nuevo mapa en el elemento con id "map"
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 8
    });

    // Crea un marcador en el mapa
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Mi ubicación'
    });
}


{}

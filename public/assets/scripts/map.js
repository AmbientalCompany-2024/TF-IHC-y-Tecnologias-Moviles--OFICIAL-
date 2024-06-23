function iniciarMap() {
    let coord = {lat: -12.072037, lng: -77.066839 };
    let map = new google.maps.Map(document.querySelector(".main__map-container"), {
        zoom: 15,
        center: coord
    });
    let marker = new google.maps.Marker({
        position: coord,
        map
    });
}
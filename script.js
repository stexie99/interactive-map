function getMap(){
    
    async function getCoords(){
        pos = await new Promise((resolve,reject)=>{
         navigator.geolocation.getCurrentPosition(resolve,reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]}
    
    // window.onload = async () => {
    //     const coords = await getCoords()
    //     return coords}

    function generateMap(result){
        const coords = result
        const marker = L.marker([coords[0], coords[1]])
        const map = L.map('map', {
            center: [coords[0], coords[1]],
            zoom: 13,
        });
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 15,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        marker.addTo(map).bindPopup('<p1><b>Your Location</b></p1>').openPopup()
    }
    document.querySelector('form').addEventListener('submit', function(){
        event.preventDefault()
    
        //console.log('hi')
        
    })
    function getCoffee(){}
    function getFood(){}
    function getHotel(){}
    function getMarket(){}
    
    window.onload= async()=>{
        const result = await getCoords()
        generateMap(result)
    }
    
}
getMap()



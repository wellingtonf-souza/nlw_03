const map = L.map("mapid").setView([-20.3477137, -43.6757828], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",).addTo(map);

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

map.on('click', (event)=>{
    
    marker && map.removeLayer(marker)
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name = lat]').value = lat
    document.querySelector('[name = lng]').value = lng

    marker = L.marker([lat,lng], {icon}).addTo(map)
})

// upload de fotos
function  addPhotoField(){
    // pegar o container de fotos 
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newfieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    const input = newfieldContainer.children[0]
    if (input.value == "") return
    newfieldContainer.children[0].value = ''
    container.appendChild(newfieldContainer)
}

function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ''
        return
    }
    span.parentNode.remove()   
}

function toggleSelect(event){
    // console.log(event.path[0])
    document.querySelectorAll('.button-select button').forEach((button)=>{
        button.classList.remove('active')
    })

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name = "open_on_weekends"]')
    input.value = button.dataset.value
}
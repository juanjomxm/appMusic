// API SPOTIFY

const apiMusic = axios.create({
    baseURL: 'https://spotify117.p.rapidapi.com',
    headers:{
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '6c1967e5d3msh3257be7d6cac589p1ff725jsnbccdc806cd80',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
})

let inputMusic = document.getElementById('input-music')

async function petitionAlbum(){
    const {data,status} = await apiMusic.get('/albums/?ids=3IBcauSj5M2A6lTeffJzdv')
    const sectionAlbum = document.getElementById('section-album')
    const imgAlbum = document.createElement('img')
    let pAlbum = document.createElement('p')
    let listTrack = document.createElement('p')
    let playTrack = document.createElement('a')
    const playText = document.createTextNode("Play")
    sectionAlbum.appendChild(pAlbum)
    sectionAlbum.appendChild(imgAlbum)
    sectionAlbum.appendChild(listTrack)
    sectionAlbum.appendChild(playTrack)
    playTrack.appendChild(playText)

    if(status == 200){
        data.albums.map(item => {
            imgAlbum.src = item.images[0].url
        })
        data.albums.map(item => {
            pAlbum.innerHTML =  `Album:${item.name} Artist:${item.artists[0].name}`
        })
        data.albums.forEach(item => {
            listTrack.innerHTML = item.tracks.items.map(item => `<li>${item.name}</li>`)    
        })
        data.albums.map(item => {
            playTrack.href = item.external_urls.spotify
        })
    }
}

// API MUSIC FREE

const apiMusicFree = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '6c1967e5d3msh3257be7d6cac589p1ff725jsnbccdc806cd80',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
})

async function infoApiMusic(){
    const {data,status} = await apiMusicFree.get('/infos')
    if(status == 200){
        console.log(data)
    }
}

// Vamos bien, debo encontrar la solucion para cuando le de click a search aparezca un boton con la opcion de darle play y sepa de inmediato que cancion es, por medio del id

let inputMusicFree = document.getElementById('input-music-free')
async function searchMusicFree(){
    const {data,status} = await apiMusicFree.get(`/search?q=emienm`)//${inputMusicFree.value}
    const sectionMusicFree = document.getElementById('section-music-free')
    const listTracks = document.createElement('p')
    sectionMusicFree.appendChild(listTracks)

    if(status == 200){
        
        listTracks.innerHTML = data.data.map(item => `<li>${item.title}</li>`)
        console.log(data.data.map(item => `${item.title} ${item.id}`))
    }
}

async function trackMusicFree(){
    const{data,status} = await apiMusicFree.get(`/track/1579904`)

    if(status == 200){
        console.log(data)
    }else{
        alert('FALLA')
    }
}
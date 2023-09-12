let inputMusic = document.getElementById('input-music')

const apiMusic = axios.create({
    baseURL: 'https://spotify23.p.rapidapi.com',
    headers:{
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '6c1967e5d3msh3257be7d6cac589p1ff725jsnbccdc806cd80',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
})

let inputSearchMusic = document.getElementById('input-search-music')
let inputSearchType = document.getElementById('input-search-type')

async function searchMusic(){
    const {data,status} = await apiMusic.get(`/search/?q=${inputSearchMusic.value}&type=${inputSearchType.value}`)
    const sectionSearchMusic = document.getElementById('section-search')
    let listTracks = document.createElement('p')
    let playTracks = document.createElement('a')
    let playTracksText = document.createTextNode('Track')
    sectionSearchMusic.appendChild(listTracks)
    sectionSearchMusic.appendChild(playTracks)
    playTracks.appendChild(playTracksText)

    if(status == 200){
        data.tracks.items.flatMap(item =>{
            listTracks.innerHTML = `<li>${item.data.name}</li>`
        })
        data.tracks.items.flatMap(item =>{
            playTracks.href = item.data.uri
        })
        console.log(data.tracks.items)   
    } else{
        alert('Falla')
    }
}

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
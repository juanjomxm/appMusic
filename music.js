const apiMusic = axios.create({
    baseURL: 'https://spotify23.p.rapidapi.com',
    params:{
        ids: '5rZuC67lXA5SI6f4n61gEw',
        limit: '4'
    },
    headers:{
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '6c1967e5d3msh3257be7d6cac589p1ff725jsnbccdc806cd80',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
})

async function petitionAlbum(){
    const {data,status} = await apiMusic.get('/albums/')
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
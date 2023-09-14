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

let inputSearchArtist = document.getElementById('input-search-artist')
async function searchMusicFree(){
    const {data,status} = await apiMusicFree.get(`/search?q=${inputSearchArtist.value}`)//
    const sectionMusicFree = document.getElementById('section-search-music')

    if(status == 200){
        data.data.filter(item => {
            const articleMusic = document.createElement('article')
            const listArtist = document.createElement('p')
            const linkTracks = document.createElement('a')
            const textLinkTracks = document.createTextNode('Play')
            const imgTrack = document.createElement('img')
            linkTracks.appendChild(textLinkTracks)
            listArtist.innerHTML = item.title
            linkTracks.href = item.link
            imgTrack.src = item.album.cover_medium
            articleMusic.appendChild(listArtist)
            articleMusic.appendChild(imgTrack)
            articleMusic.appendChild(linkTracks)
            sectionMusicFree.appendChild(articleMusic)
            console.log(data) 
        })
    }
}

let inputArtist = document.getElementById('input-artist')
async function searchArtist(){
    const{data,status} = await apiMusicFree.get(`/artist/${inputArtist.value}`)
    const sectionArtist = document.getElementById('section-search-artist')

    if(status == 200){
        const imgArtist = document.createElement('img')
        const nameTrack = document.createElement('p')
        const linkListenTrack = document.createElement('a')
        const textLinkListenTrack = document.createTextNode('Albums')
        linkListenTrack.appendChild(textLinkListenTrack)
        nameTrack.innerText = data.name
        imgArtist.src = data.picture_medium
        linkListenTrack.href = data.link
        sectionArtist.appendChild(imgArtist)
        sectionArtist.appendChild(linkListenTrack)
        sectionArtist.appendChild(nameTrack)
        console.log(data)
    }else{
        alert('FALLA')
    }
}
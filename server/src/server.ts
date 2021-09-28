import axios from 'axios'

interface IAxiosdto {
  track: { 
    title: string,
    url: string,
    subtitle: string,
    images: any
  }
}

async function handle() {
  const {data} = await axios({
    method: 'get',
    url: 'https://shazam.p.rapidapi.com/search',
    params: { term: 'música clássica', locale: 'pt-BR', offset: '0', limit: '5' },
    headers: {
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
      'x-rapidapi-key': 'aab9ea10b9mshc1cb5b5ba4196bep109f12jsn0a162ea79806'
    },
  })
  const playlist = data.tracks.hits
  const music_name = playlist.map((data: IAxiosdto) => {
    const music = {
      title: data.track.title,
      url: data.track.url,
      artist: data.track.subtitle,
      image: data.track.images.coverart
    }
    return music
  })
  console.log('music_name', music_name);
}

handle()
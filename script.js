
let term = ''
const songContainer = document.getElementById('container');

const updateTerm = () => {
    term = document.getElementById('searchInput').value;

    if (!term || term === '') {
        alert('Please enter a search term');
    } else {

        while (songContainer.firstChild) {
            songContainer.removeChild(songContainer.firstChild);
        }

        const url = `https://itunes.apple.com/search?term=${term}&media=music&limit=9`
        fetch(url)
            .then((Response) => Response.json())
            .then((data) => {
                //console.log(data.results);
                const artists = data.results;
                //HTMLにElementを作成する
                return artists.map(result => {
                    const article = document.createElement('article'),
                        artist = document.createElement('p'),
                        song = document.createElement('p'),
                        image = document.createElement('img'),
                        audio = document.createElement('audio'),
                        audioSource = document.createElement('source')

                    //article にidを付与する
                    article.className = "item";
                    audio.className = "audio";

                    //HTMLに編集する
                    artist.innerHTML = result.artistName
                    song.innerHTML = result.trackName
                    image.src = result.artworkUrl100
                    audioSource.src = result.previewUrl
                    audio.setAttribute('controls', '')

                    //親要素(article)に入れる
                    article.appendChild(image)
                    article.appendChild(artist)
                    article.appendChild(song)
                    article.appendChild(audio)
                    //audioSourceをaudio(親要素)の配下に入れる
                    audio.appendChild(audioSource)

                    //containerの配下に入れる
                    songContainer.appendChild(article);

                })
            })
            .catch(error => console.log('Request failed:', error))


    }
}

const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', updateTerm);

document.addEventListener('play', event => {
    const audio = document.getElementsByTagName('audio');
    for (i = 0; i < audio.length; i++) {
        if (audio[i] != event.target) {
            audio[i].pause();
            console.log(event);
        }
    }
}, true)



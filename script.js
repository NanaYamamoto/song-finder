
/// Access-Control-Allow-Originエラーを回避する


const url = 'https://itunes.apple.com/search?term=The=Beatles&artistName=Beatles&limit=6&entity=song'
fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        //console.log(data.results);
        const artists = data.results;
        //HTMLにElementを作成する
        return artists.map(result => {

            const songContainer = document.getElementById('container');
            const article = document.createElement('article'),
                artist = document.createElement('p'),
                song = document.createElement('p'),
                image = document.createElement('img'),
                audio = document.createElement('audio'),
                audioSource = document.createElement('source')

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

            console.log(result);
        })
    })
    .catch(error => console.log('Request failed:', error))


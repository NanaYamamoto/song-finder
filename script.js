
/// Access-Control-Allow-Originエラーを回避する


const url = 'https://itunes.apple.com/search?term=beatles&limit=3'
fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data.results);
    })
    .catch(error => console.log('Request failed:', error))


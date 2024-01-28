
/// Access-Control-Allow-Originエラーを回避する


const url = 'https://itunes.apple.com/search?term=beatles'
fetch(url, {
    method: 'GET',
    mode: 'cors',
})
    .then((Response) => Response.json())
    .then((date) => {
        console.log(data);
    })


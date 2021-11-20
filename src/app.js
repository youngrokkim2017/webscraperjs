const feedDisplay = document.querySelector('#feed')
// const feedDisplay = document.getElementById('feed')

fetch('http://localhost:8000/results')
.then(response => response.json())
// .then(data => console.log(data))
.then(data => {
    data.forEach(article => {
        // const title = `<h3>` + article.title + `</h3>`
        // feedDisplay.insertAdjacentHTML("beforeend", title);

        const articleItem = `<div><h3>` + article.title + `</h3><p>` + article.url + `</p></div>`
        feedDisplay.insertAdjacentHTML("beforeend", articleItem);
        // insertAjacentHTML passes the specific text in as html and inserts it into the DOM tree
        // beforeend inserts after the last child
    })
})
.catch(err => console.log(err))
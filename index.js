const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT = 8000
const app = express()
const cors = require('cors');
app.use(cors())

// // url to web scrape
// const url = '';
// // element class name 
// const CLASSNAME = ''

// const url = 'https://www.theguardian.com/uk'
const url = 'https://www.theatlantic.com/most-popular/'
// const CLASSNAME = '.fc-item__title'
const CLASSNAME = 'LandingRiver_promoItem__15bX_'

// app.METHOD(PATH, HANDLER)

app.get('/', function (req, res) {
    res.json('This is my webscraper')
});

app.get('/results', (req, res) => {
    axios(url)
    .then(response => {
        const html = response.data
        const data = cheerio.load(html)
        const articles = []

        data('.LandingRiver_promoItem__15bX_', html).each(function () {
            const title = data(this).text()
            // data(this).attr('href')
            const url = data(this).find('a').attr('href')

            articles.push({
                title,
                url
            })
        })

        // console.log(articles)
        res.json(articles)
    }).catch(err => console.log(err))
})

// axios(url)
//     .then(res => {
//         const html = res.data
//         const data = cheerio.load(html)
//         const articles = []

//         data('.LandingRiver_promoItem__15bX_', html).each(function () {
//             const title = data(this).text()
//             // data(this).attr('href')
//             const url = data(this).find('a').attr('href')

//             articles.push({
//                 title,
//                 url
//             })
//         })

//         console.log(articles)
//     }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
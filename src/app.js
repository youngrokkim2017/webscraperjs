const feedDisplay = document.querySelector('#feed')
// const feedDisplay = document.getElementById('feed')

fetch('http://localhost:8000/results')
.then(response => response.json())
.then(data => console.log(data))
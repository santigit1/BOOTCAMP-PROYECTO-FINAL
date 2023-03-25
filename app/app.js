// API RYCK AND MORTY

const API_BASE = "https://rickandmortyapi.com/api"
const API_CHARACTERS = "https://rickandmortyapi.com/api/character?"

const llamadaAApi = fetch(API_CHARACTERS)

//Esperando respuesta de API

llamadaAApi.then((data)=>{
    return data.json()
})

.then((data)=>{
    const $container = document.getElementById("container")
    const characters = data.results
    console.log(characters[0])
    for (let i= 0; i < characters.length; i++)

    $container .innerHTML +=`
    <div class="item-grid">
       <img src=${characters[i].image} alt="">
        <h3>${characters[i].name}</h3>
        <p>Gender: ${characters[i].gender}</p>
        <p>Species: ${characters[i].species}</p>
        <p>Status: ${characters[i].status}</p>
        <p>Origin: ${characters[i].origin.name}</p>
    </div>
    `
})

// Si hay errores.
.catch((err) => {
    console(err)
})


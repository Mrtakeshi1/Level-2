const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)

xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        const pokemonList = data.objects[0].pokemon
        console.log(data)
        showPokemon(pokemonList)
    }
}

function showPokemon(pokemon){
    for(let i = 0; i < pokemon.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = pokemon[i].name
        document.body.appendChild(h1)
        const details = document.createElement('p')
        details.textContent = pokemon[i].resource_uri
        h1.appendChild(details)
        details.style.fontSize = '17px'
}}
let botao= document.querySelector("#botao")
const pokelista=document.getElementById("pokelist")
let nome=document.querySelector("#nome")
let elemento=document.querySelector("#elemento")
let pic=document.getElementById("pic")
document.querySelector("#botao").onclick=()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokelista.value.toLowerCase()}`)
    .then(
        function(res){
            return res.json()
        })
        .then(function(pokemon){
                nome.innerHTML = pokemon["name"]
                
                if(pokemon["types"]["1"]==undefined){
                    elemento.innerHTML = elemento.innerHTML = pokemon["types"]["0"]["type"]["name"]
                }
                else {elemento.innerHTML = elemento.innerHTML = pokemon["types"]["0"]["type"]["name"]+" "+"/"+" "+pokemon["types"]["1"]["type"]["name"]
            }

                let img= pokemon["sprites"]["front_default"]
                pic.setAttribute("src",img)
               pokelista.value=""
            
                })}

    

    document.querySelector("#aleatorio").onclick=()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*(898-1+1)+1)}`)
    .then(
        function(res){
            return res.json()
        })
        .then(function(pokemon){
                nome.innerHTML = pokemon["name"]
                
                if(pokemon["types"]["1"]==undefined){
                    elemento.innerHTML = elemento.innerHTML = pokemon["types"]["0"]["type"]["name"]
                }
                else {elemento.innerHTML = elemento.innerHTML = pokemon["types"]["0"]["type"]["name"]+" "+"/"+" "+pokemon["types"]["1"]["type"]["name"]
            }

                let img= pokemon["sprites"]["front_default"]
                pic.setAttribute("src",img)
                console.log(pokemon)
            
                })}




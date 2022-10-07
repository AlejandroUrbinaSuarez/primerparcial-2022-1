
    function getData(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => response.json())
    .then(data => leer(data));
    }

    function leer(data){
        console.log(data)
        document.getElementById("bebidas").innerHTML = ""
        for (let i = 0; i < 6; i++){
            let nombre = data.drinks[i].strDrink;
            let ingrediente1 = data.drinks[i].strIngredient1
            let ingrediente2 = data.drinks[i].strIngredient2
            let ingrediente3 = data.drinks[i].strIngredient3
            let alcoholic = data.drinks[i].strAlcoholic
            let category = data.drinks[i].strCategory

            document.getElementById("bebidas").innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="img/imgcoctel.jfif" class="card-img-top" alt="...">
                <div class="card-body">
                 <h5 class="card-title" name="${nombre}" >${nombre}</h5>
                  <p class="card-text">Ingredientes</p>     
                  <p class="card-text">${ingrediente1}, ${ingrediente2}, ${ingrediente3}</p> 
                  <p class="card-text">Categoría: ${category}</p>  
                <a href="#" class="btn btn-primary">${alcoholic}</a>
                  <button type="button" class="btn btn-success">Comprar</button>
                </div>
            </div>            
            `
        }
    }

    function agregarCarrito(){

    }

    getData();
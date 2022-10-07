
    function getData(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => response.json())
    .then(data => leer(data));

    }

    function leer(data){        
        document.getElementById("bebidas").innerHTML =""
        for (let i = 0; i < 6; i++){
            let nombre = data.drinks[i].strDrink;
            let ingrediente1 = data.drinks[i].strIngredient1
            let ingrediente2 = data.drinks[i].strIngredient2
            let ingrediente3 = data.drinks[i].strIngredient3
            let alcoholic = data.drinks[i].strAlcoholic
            let category = data.drinks[i].strCategory

            document.getElementById("bebidas").innerHTML +=`
            <div class="card col-md-4" style="width: 18rem;">
                <img src="img/imgcoctel.jfif" class="card-img-top" alt="...">
                <div class="card-body">
                 <h5 class="card-title">${nombre}</h5>
                  <p class="card-text">Ingredientes</p>     
                  <p class="card-text">${ingrediente1}, ${ingrediente2}, ${ingrediente3}</p> 
                  <p class="card-text">Categoría: ${category}</p>  
                  <button type="button" class="btn btn-primary">${alcoholic}</button>
                  <button type="button" class="btn btn-success" onclick="agregarCarrito('${nombre}')">Comprar</button>
                </div>
            </div>            
            `
        }
    }

    function agregarCarrito(nombreBebida){

        nombre = nombreBebida
        precio = 20000

        let coctel= {
            nombre,
            precio
        }
        if(localStorage.getItem("Cocteles") == null){
            let cocteles = []
            cocteles.push(coctel)
            localStorage.setItem("Cocteles",JSON.stringify(cocteles))
          } else{
            let cocteles = JSON.parse(localStorage.getItem("Cocteles"))
            cocteles.push(coctel)
            localStorage.setItem("Cocteles",JSON.stringify(cocteles))
          }

    }

    getData();
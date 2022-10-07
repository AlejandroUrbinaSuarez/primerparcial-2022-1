function leer(){
    let cocteles = JSON.parse(localStorage.getItem("Cocteles"));
    document.getElementById("carrito").innerHTML = ""
    for(let i=0; i<cocteles.length; i++){
        console.log(cocteles[i.nombre])
        let nombre = cocteles[i].nombre
        let precio = cocteles[i].precio

        document.getElementById("carrito").innerHTML += 
      `
      <tr>
      <th scope="row">${nombre}</th>
      <td>${precio}</td>
        </tr>
      `
    }
    leer()

    }
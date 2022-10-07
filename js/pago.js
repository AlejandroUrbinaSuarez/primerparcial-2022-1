function pagar(){

    alert("Su Pago se ha recibido Exitosamente.")
    let coctel= {
        nombre,
        precio
    }
    let cocteles = JSON.parse(localStorage.getItem("Cocteles"))
    localStorage.setItem("Cocteles",JSON.stringify(cocteles))
    window.location.href="../index.html";
}
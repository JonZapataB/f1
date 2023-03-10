fetch('http://ergast.com/api/f1/2023/circuits.json')
  .then(response => response.json())
  .then(data => {
    const circuits = data.MRData.CircuitTable.Circuits;
    circuits.forEach(circuit=> {
      crearCircuito( circuit.circuitId, circuit.circuitName, circuit.url, circuit.Location.locality, circuit.Location.country);
    });
  })
  .catch(error => {
    console.log(error);
  });

  function crearCircuito(id, nombre, enlace, ubicacion, pais){
    let ul = document.createElement("ul");
     ul.setAttribute("id", "circuitos"); 
    
    let circuito = document.createElement("li");
    let wikipedia = document.createElement("li");
    let localizacion = document.createElement("li");
    let nacion = document.createElement("li");
    let li4 = document.createElement("li");
    let img = document.createElement("img");
    let link = document.createElement("a");
    link.href = enlace;
    link.setAttribute("target", "_blank");
    link.innerText = "INFO";
    img.setAttribute("src", `circuitos/${id}.png`);
    circuito.innerText = nombre;
    wikipedia.appendChild(link);
    localizacion.innerText = ubicacion;
    nacion.innerText = pais;
    li4.appendChild(img);
    ul.appendChild(img);
    ul.appendChild(circuito);
    ul.appendChild(wikipedia);
    ul.appendChild(localizacion);
    ul.appendChild(nacion);
    document.getElementById("circuits").appendChild(ul);
}


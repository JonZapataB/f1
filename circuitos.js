fetch('http://ergast.com/api/f1/2023/circuits.json')
  .then(response => response.json())
  .then(data => {
    const circuits = data.MRData.CircuitTable.Circuits;
    circuits.forEach(circuit=> {
      console.log(circuit);
      crearCircuitos( circuit.circuitId, circuit.circuitName, circuit.url, circuit.Location.locality, circuit.Location.country);
    });
  })
  .catch(error => {
    console.log(error);
  });

  function crearCircuitos(id, nombre, enlace, ubicacion, pais){
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let img = document.createElement("img");
    let link = document.createElement("a");
    link.href = enlace;
    link.setAttribute("target", "_blank");
    link.innerText = "wikipedia";
    img.setAttribute("src", `circuitos/${id}.png`);
    li.innerText = nombre;
    li1.appendChild(link);
    li2.innerText = ubicacion;
    li3.innerText = pais;
    li4.appendChild(img);
    ul.appendChild(img);
    ul.appendChild(li);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    document.getElementById("circuits").appendChild(ul);
}
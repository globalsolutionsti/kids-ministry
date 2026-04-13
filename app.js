function login(){
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if(u==="admin" && p==="admin123"){
    document.querySelector(".login").classList.add("hidden");
    document.querySelector(".panel").classList.remove("hidden");
    cargar();
  }else{
    alert("Credenciales incorrectas");
  }
}

function guardar(){
  const data = {
    action:"save",
    nombre:document.getElementById("nombre").value,
    edad:document.getElementById("edad").value,
    grupo:document.getElementById("grupo").value,
    foto:"",
    adultos:[]
  };

  fetch(API_URL,{
    method:"POST",
    body:JSON.stringify(data)
  })
  .then(r=>r.json())
  .then(()=>{
    alert("Guardado");
    cargar();
  });
}

function cargar(){
  fetch(API_URL+"?action=getKids")
  .then(r=>r.json())
  .then(data=>{
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    data.forEach(k=>{
      lista.innerHTML += `
        <div class="card">
          <b>${k.nombre}</b><br>
          Edad: ${k.edad}<br>
          Grupo: ${k.grupo}
        </div>
      `;
    });
  });
}

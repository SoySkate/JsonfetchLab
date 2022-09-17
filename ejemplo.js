// EJEMPLO DIEGO DOC
document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getJson").addEventListener("click", getJson);
document.getElementById("getHere").addEventListener("click", getHere);
document.getElementById("addPost").addEventListener("submit", addPost);

// Usar nomenclatura de funcion viejaEscuela, a esta funcion vamos a pasarle el metod .fetch "EL METODO FETCH EN PRINCIPIO ES UNA PROMESA, RECUERDEN QUE AL TENER ACCESSO A LAS PROMESAS, PODEMOS ACCEDER A LOS METODOS RELACIONADOS DE LAS PROMESAS QUE SERIAM: .THEN() - .CATCH() - Promise.all()"
//...............................................................................
// Calling an internal TXT document
// parte 1 - expression de funcion
function getText() {
  // parte 2 - incializamos el metodo fetch y apuntamos al endpoint que queremos usar
  fetch("sample.txt")
    // parte 3 - recibimos info sin limpieza del formato que aputnamos con el metodo fetch() y lo pasamaos mediante una funcion con la promesa .then() para sacar la respuesta mediante un argumento/parametro que lo limpiamos/editamos con algun  metodo en especifico que en este caso es el metodo text() - RESOLVE()
    .then((response) => response.text())
    // parte 4 - una vez recibimos la info a traves del metodo de "limpieza", aprovechamos otra promesa para inyectar la info del texto dentro del UI mediante DOM manipulation. RESOLVE()
    .then((infoFromText) => {
      document.querySelector("#output").innerHTML = infoFromText;
    })
    // parte 5 - si existe algun error de connection con el archivo en el fetch parametrizamos el error mediante el REJECT de la promesa - REJECT()
    .catch((error) => {
      console.log(error);
    });
}

// Calling an internal JSON document
function getJson() {
  fetch("users.json")
    .then((response) => response.json())
    .then((userInfo) => {
      let userData = "";
      userInfo.forEach((user) => {
        userData += `
        <ul>
          <li>${user.name}</li>
          <li>${user.email}</li>
          <li>${user.id}</li>
        </ul>
        `;
      });
      document.querySelector("#output").innerHTML = userData;
    })
    .catch((error) => {
      console.log(error);
    });
}

// Calling an external API
function getHere() {
  fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_end=30")
    .then((response) => response.json())
    .then((res) => {
      let externalApiData = "";
      res.forEach((photo) => {
        externalApiData += `
        <div class="card" style="width: 18rem">
        <img
            class="card-img-top"
            src="${photo.url}"
            alt="Ruben Fucking Blades aka ruben blade's"
        />
        <div class="card-body">
            <h5 class="card-title">${photo.title}</h5>
            <p class="card-text">
                ${photo.userId}
            </p>
        </div>
        </div>
        `;
      });

      document.querySelector("#output").innerHTML = externalApiData;
    })
    .catch((error) => console.log(error));
}
//...............................................................................
// Enviar mediante el fetch method un post usando un objeto dentro del fetch como segundo parametro que dentro del mismo pasaremos cierta informacion, esta informacion es asociada con los HTTP methods, [CREATE, READ, UPDATE, DELETE]. Vamos a enviar la informacion del formulario al API falso y veremos como se registra el ID correspondiente a la sequencia de objetos que nos presenta el API.
// function addPost(preventForm) {
//   preventForm.preventDefault(); // Omite que se envie la info del formulario

//   // Nos traemos la informacion que esta dentro del Input Tag para el titulo y el textArea para el body del post
//   let title = document.getElementById("title").value;
//   let body = document.getElementById("body").value;

//   // Using fetch to push to API
//   fetch("https://jsonplaceholder.typicode.com/comments", {
//     method: "POST",
//     headers: {
//       Accept: "text/plain, application/json, */*",
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({ title: title, body: body }),
//   })
//     .then((response) => response.json())
//     .then((dataDeFormulario) => {
//       console.log(dataDeFormulario);
//     });
//   body.value = "";
// }

// <div class="card" style="width: 18rem">
// <img
//     class="card-img-top"
//     src="${photo.thumbnailUrl}"
//     alt="Ruben Fucking Blades aka ruben blade's"
// />
// <div class="card-body">
//     <h5 class="card-title">${photo.title}</h5>
//     <p class="card-text">
//         ${photo.body}
//     </p>
//     <p class="card-text">
//         ${photo.userId}
//     </p>
// </div>
// </div>

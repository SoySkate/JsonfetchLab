//Cogemos la lista de JSON, las estudiamos a fondo y después hacemos un par de funciones que hagan fetch y printeen la información que viene del fetch en nuestro HTML. Hya que darle un mínimo de styling para que quede bien!!
//ESPACIO PARA LA DECLARACION Y VINCULACION DE LOS BOTONES
document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getJson").addEventListener("click", getText);
document.getElementById("getHere").addEventListener("click", getText);
// TEXT INTERNAL DOCUEMNT
function getText() {
  fetch("sample.txt")
    .then((infoTxt) => {
      infoTxt.text();
    })
    .then((elementInfo) => {
      document.querySelector("#output").innerHTML = elementInfo;
    })
    .catch((error) => {
      console.log(error);
    });
}

// JSON INTERNAL DOCUEMNT
function getJson() {
  fetch("users.json")
    .then((usersInfo) => {
      usersInfo.json();
    })
    .then((everyUserInfo) => {
      let userData = "";
      everyUserInfo.forEach((user) => {
        userData += `
            <ul>
              <li>${user.name}</li>
              <li>${user.email}</li>
              <li>${user.id}</li>
            </ul>`;
      });
      document.querySelector("#output").innerHTML = userData;
    })
    .catch((error) => {
      console.log(error);
    });
}
function getHere() {
  fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=30`)
    .then((infoLink) => {
      infoLink.json();
    })
    .then((eachUser) => {
      let dataUserApi = "";
      eachUser.forEach((photo) => {
        dataUserApi += `<div class= "mierda" style = "width:25px">
                <ol> 
                <li>${photo.albumId}</li>
                <li>${photo.title}</li>
                </ol>
                </div>`;
      });
      document.querySelector("#output").innerHTML = dataUserApi;
    })
    .catch((error) => console.log(error));
}

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const n = document.querySelector('.name'); // Aqui se le cambia de "name" a ".name" por el uso de "querySelector"
const b = document.querySelector('.blog'); // Aqui se le cambia de "blog" a ".blog" por el uso de "querySelector"
const l = document.querySelector('.location'); //Se quita el signo de "$" aqui como en las otras variables para de name y blog 

async function displayUser (username) {
  // n.textContent = 'cargando...'; Se puede omitir esta linea ya que si no encuentra error, se sustituye por el nombre.
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //Aqui no se habia guardado la respuesta de los datos en "data" como bien se ve en la linea 11
  console.log(data);
  n.textContent = `${data.name}`; //Quitamos el uso de comillas simples por backticks y el signo de "$"
  b.textContent = `${data.blog}`; //Quitamos el uso de comillas simples por backticks y el signo de "$"
  l.textContent = `${data.location}`; //Quitamos el uso de comillas simples por backticks y el signo de "$"
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`; // Ponemos " ; " para el uso de buenas prácticas
}

displayUser('stolinski').catch(handleError);
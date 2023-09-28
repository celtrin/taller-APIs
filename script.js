let button = document.getElementById("buscar");
let url = 'https://type.fit/api/quotes';
let array = [];

function showQuote() {
  let i = Math.floor(Math.random() * array.length);
  
  document.getElementById("container").innerHTML = `${array[i].text} - ${array[i].author}`;
}

button.addEventListener('click', () => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      array = data; // Almacena los datos en el array
      showQuote(); // Llama a la función para mostrar una cita
    })
    .catch(error => {
      console.error('Error al cargar las citas:', error);
    });
});

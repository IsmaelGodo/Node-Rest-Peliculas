const fetch = require('node-fetch');

// Clave de la API (usar el .env)
const API_KEY = '45e57934';

// Obtener película por su ID
exports.getPeliculaById = async (req, res) => {
  
  if (req.params.id) { // con ID
    try {
        let response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`); //{}
        let films = await response.json(); //{}
        res.status(200).json(films); // Respuesta de la API para 1 producto
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
} else { // sin ID --> TODOS los products
    try {
        let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`); // []
        let films = await response.json(); // []
        res.status(200).json(films); // Respuesta de la API para muchos productos
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
}
 /* try {
    const id = req.params.id;
    const apiUrl = `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
    const response = await fetch(apiUrl);
    const movieData = await response.json();
    res.json(movieData);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener los detalles de la película' });
  }
};*/

// Obtener una película por su título
exports.getPeliculaByTitle = async (req, res) => {
 // res.status(200).send("VENGA QUE SI");}
 try {
    const title = req.params.title;
    const apiUrl = `http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`;
    const response = await fetch(apiUrl);
    const movieData = await response.json();
    res.json(movieData);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener los detalles de la película' });
  }
};

// Crear una nueva película ????
const peliculas = [];

exports.createPelicula = async(req, res) => {
  try {
    const { titulo, autor, descripcion, src } = req.body;
    const pelicula = { titulo, autor, descripcion, src };
    peliculas.push(pelicula);

    res.status(200).json({ message: `Se ha guardado ${titulo}` });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al crear la película' });
  }
};

/*  console.log("Esto es el console.log de lo que introducimos por postman", req.body); // Objeto recibido
  const nuevaPelicula = req.body; // {} 

  let response = await fetch('http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}', {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevaPelicula)
  })
  let answer = await response.json(); // objeto de vuelta de la petición
  console.log("Probando", answer);

  res.status(201).json({
      msj: `Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`,
      "product": answer
  });
}
*/
// Actualizar
exports.updatePelicula = (req, res) => {
  try {
    const { id } = req.body;
    res.status(200).json({ id, message: 'Se ha actualizado la película' });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al actualizar la película' });
  }
};

// Borrar
exports.deletePelicula = (req, res) => {
  try {
    const { id } = req.body;

    res.status(200).json({ id, message: 'Se ha borrado la película' });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al borrar la película' });
  }
};

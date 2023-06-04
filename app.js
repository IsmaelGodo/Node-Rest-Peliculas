const express = require('express');
const app = express();
const peliculasRoutes = require('./routes/peliculasRoutes');

app.use(express.json());

// Rutas de películas
app.use('/api/film', peliculasRoutes);

// Ruta no encontrada (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error en el servidor' });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

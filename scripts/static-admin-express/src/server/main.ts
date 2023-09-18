import express from "express";
import ViteExpress from "vite-express";
import fs from 'fs';

const app = express();

app.use(express.json());

app.post('/engineers/update', (req, res) => {
  // Obtener los datos enviados en el cuerpo de la solicitud
  const newData = req.body;

  // Leer el archivo JSON existente
  fs.readFile('./public/engineers.json', 'utf8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'No se pudo leer el archivo de datos.' });
    }

    try {
      // Escribir los datos actualizados en el archivo JSON
      fs.writeFile('./public/engineers.json', JSON.stringify(newData), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'No se pudo escribir en el archivo de datos.' });
        }

        // Devolver una respuesta exitosa
        return res.json({ message: 'Melos' });
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'No se pudo analizar el archivo de datos JSON.' });
    }

    return null;
  });
});

app.post('/societies/update', (req, res) => {
  // Obtener los datos enviados en el cuerpo de la solicitud
  const newData = req.body;

  // Leer el archivo JSON existente
  fs.readFile('./public/societies.json', 'utf8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'No se pudo leer el archivo de datos.' });
    }

    try {
      // Escribir los datos actualizados en el archivo JSON
      fs.writeFile('./public/societies.json', JSON.stringify(newData), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'No se pudo escribir en el archivo de datos.' });
        }

        // Devolver una respuesta exitosa
        return res.json({ message: 'Melos' });
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'No se pudo analizar el archivo de datos JSON.' });
    }

    return null;
  });
});



ViteExpress.listen(app, 3000, () =>
  console.log("Vite + Express activo en el 3000...")
);

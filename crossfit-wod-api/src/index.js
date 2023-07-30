// Utilizo la libreria express
const express = require("express");

// Llamo el router de routes/index.js
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

// Inicializo la app
const app = express();

// Le doy el puerto donde se va a levantar la app
const PORT = process.env.PORT || 3000;

// Utilizo el use para hacer referencia a la ruta
// y el router que va a utilizar
app.use("/api/v1/workouts", v1WorkoutRouter);

// Escucho en el puerto 3000;
app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

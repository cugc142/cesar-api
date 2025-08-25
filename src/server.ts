import express from "express";
import expedienteRouter from "@routes/expediente.routes";

const app = express();

app.use(express.json());

// Rutas
app.use("/expedientes", expedienteRouter);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

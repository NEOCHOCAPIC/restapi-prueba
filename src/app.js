import express from 'express'
import rutaEmpleado from './routes/empleados.routes.js'
import indexRoutes from './routes/index.routes.js'
const app = express()

app.use(express.json()) // para entender los datos obtenidos en formato json


app.use(indexRoutes)
app.use('/api',rutaEmpleado)

app.use((req, res, next)=>{
   res.status(404).json({
      message: "Endopint no encontrado"
   })
})
export default app;
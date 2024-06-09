import {Router} from 'express'
import{getEmpleado,putEmpleado,postEmpleado,deleteEmpleado , getEmpleadoId} from '../controllers/empleado.controller.js'
const router = Router()

router.get('/empleados' , getEmpleado)

router.get('/empleados/:id' , getEmpleadoId)

router.patch('/empleados/:id' , putEmpleado)

router.post('/empleados' ,postEmpleado )

router.delete('/empleados/:id' , deleteEmpleado)

export default router
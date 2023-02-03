import { Router } from 'express'
import loginController from '../Controller/LoginController.js'
const router = Router();

router.post('/login', loginController.login)
// router.post('/cabRegister', loginController.cabRegister)
// router.get('/cabRegister', loginController.getCabDetails)
// router.post('/userRegister', loginController.userRegister)
// router.get('/userRegister', loginController.getUserDetails)
// router.delete('/userRegister/:id', loginController.deleteUser)

export default router;
import { Router } from "express"
const router=Router()
import Controller from '../Controller/UserController.js'

router.post('/userRegister', Controller.userRegister)
router.get('/userRegister', Controller.getUserDetails)
router.delete('/userRegister/:id', Controller.deleteUser)
router.delete('/userRegister', Controller.deleteMultipleUser)
router.put('/userRegister', Controller.updateUser)
router.get('/usersCount', Controller.countUser)

export default router
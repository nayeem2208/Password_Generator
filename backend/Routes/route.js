import express  from "express";
import { addPassword, check, deletePassword, getPasswords, login, register } from "../Controllers/controller.js";
const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/getPasswords',getPasswords)
router.put('/addPassword',addPassword)
router.delete('/deletePassword',deletePassword)
// router.get('/check',check)

export default router
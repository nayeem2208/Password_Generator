import express  from "express";
import { check, login, register } from "../Controllers/controller.js";
const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/check',check)

export default router
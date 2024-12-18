import express from 'express';
const router = express.Router();
import * as UserController from '../controllers/UserController.js';

router.post("/Registration", UserController.Registration);
router.post("/Login", UserController.login);
router.get("/ReadProfile",UserController.ReadProfile);
router.get("/ReadProfileAll",UserController.ReadProfileAll);
router.post("/UpdateProfile/:id",UserController.UpdateProfile);
router.delete("/DeleteProfile/:id",UserController.DeleteProfile);





export default router;
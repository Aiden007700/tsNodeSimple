import { Router } from "express";
import userController from "./controllers/userController";
import restaurantController from "./controllers/restaurantController";
import dishController from "./controllers/dishController";


const router = Router();

router.use('/users', userController);

router.use('/restaurants', restaurantController);

router.use('/dishes', dishController);

export default router;
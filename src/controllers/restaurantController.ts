import { Router } from "express";
import restaurantService from "../services/restaurantService";

const router = Router();

router.get('/', async (req, res) => {
    const restaurants = await restaurantService.getRestaurants();
    res.send(restaurants);
})

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const restaurant = await restaurantService.getRestaurant(id);
    res.send(restaurant);
})

router.post('/', async (req, res) => {
    const restaurant = req.body;
    const newRestaurant = await restaurantService.createRestaurant(restaurant);
    res.send(newRestaurant);
})

router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const restaurant = req.body;
    const updatedRestaurant = await restaurantService.updateRestaurant(id, restaurant);
    res.send(updatedRestaurant);
})

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const deletedRestaurant = await restaurantService.deleteRestaurant(id);
    res.send(deletedRestaurant);
})

export default router;

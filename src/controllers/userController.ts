import { Router } from "express";
import userService from "../services/userService";

const router = Router();

router.get('/', async (req, res) => {
    const users = await userService.getUsers();
    res.send(users);
})

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await userService.getUser(id);
    res.send(user);
})

router.post('/', async (req, res) => {
    const user = req.body;
    const newUser = await userService.createUser(user);
    res.send(newUser);
})

router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const user = req.body;
    const updatedUser = await userService.updateUser(id, user);
    res.send(updatedUser);
})

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const deletedUser = await userService.deleteUser(id);
    res.send(deletedUser);
})

export default router;
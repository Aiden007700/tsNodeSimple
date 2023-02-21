import { Router } from "express";
import dishService from "../services/dishService";

const router = Router();

router.get("/", async (req, res) => {
  const dishes = await dishService.getDishes();
  res.send(dishes);
});
router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const dish = await dishService.getDish(id);
  res.send(dish);
});

router.post("/", async (req, res) => {
  const dish = req.body;
  const newDish = await dishService.createDish(dish);
  res.send(newDish);
});

router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const dish = req.body;
  const updatedDish = await dishService.updateDish(id, dish);
  res.send(updatedDish);
});

router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const deletedDish = await dishService.deleteDish(id);
  res.send(deletedDish);
});

export default router;

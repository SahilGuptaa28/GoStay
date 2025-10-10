import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getUSerData, storeRecentSearchedCities } from "../controllers/userController.js";


const userRouter = express.Router()

userRouter.get('/',protect,getUSerData);
userRouter.post('/store-recent-search',protect,storeRecentSearchedCities);

export default userRouter;
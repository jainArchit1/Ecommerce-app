import express from "express";
const productRouter = express.Router();
import {
  addProduct,
  listProduct,
  removeProduct,
} from "../controller/productController";
import upload from "../middleware/multer";
productRouter.post(
  "/addProduct",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.get("/getProduct", listProduct);
productRouter.delete("/removeProduct", removeProduct);
export default productRouter;

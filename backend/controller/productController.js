import { json } from "body-parser";
import { v2 as cloudinary } from "cloudinary";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );
    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      images: imageUrl,
      date: Date.now(),
    };
    const product = await productModel(productData);
    await product.save();
    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
const listProduct = async (req, res) => {
  try {
    const data = await productModel.find({});
    res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const data = await productModel.findByIdAndDelete(id);
    res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
const singleProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const data = await productModel.findById(id);
    res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
export { addProduct, listProduct, removeProduct };

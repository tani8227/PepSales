import Product from "../models/product.js";


export const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    req.body.customer_ref=req.user._id;
    console.log(req.body);
    const product = await Product.create(req.body);
    return res.status(200).json({
      message: "Product created successfully!",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating product",
      error: error.message,
    });
  }
};


export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching products",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.customer_ref.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to update this product" });
    }
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error updating product",
      error: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    if (product.customer_ref.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this product" });
    }
    await Product.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting product",
      error: error.message,
    });
  }
};



export const searchProducts = async (req, res) => {
  const { keyword } = req.query;
  try {
    const products = await Product.find({
      productName: { $regex: keyword, $options: "i" },
    });
    return res.status(200).json(products);
  } catch (error) {
   return  res.status(500).json({ message: "Search failed", error: error.message });
  }
};


export const filterProducts = async (req, res) => {
  const { quantity, minPrice, maxPrice } = req.query;
  const filter = {};

  if (quantity)
    {
      filter.quantity = quantity;
    }
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = parseFloat(minPrice);
    if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
  }

  try {
    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Filter failed", error: error.message });
  }
};

export const sortByPrice = async (req, res) => {
  const { order = 'asc' } = req.query;
  const sortOrder = order === 'desc' ? -1 : 1;
   console.log("aaya hai !!!")
  try {
    const products = await Product.find().sort({ price: sortOrder });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to sort by price", error: error.message });
  }
};


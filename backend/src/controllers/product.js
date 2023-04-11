import dotenv from "dotenv";
import joi from "joi";
import Product from "../models/product";
import Category from "../models/category"
dotenv.config();

const productSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  image: joi.string(),
  description: joi.string(),
  categoryId: joi.string().required()
});

 
export const getAll = async (req, res) => {
  try {
    const { _sort = "createAt", _order = "asc", _limit = 40, _page = 1 } = req.query;
    const options = {
        page: _page,
        limit: _limit,
        sort: {
            [_sort]: _order === "desc" ? -1 : 1,
        },
    };
    const products = await Product.paginate({},options);
    if (products.length === 0) {
      return res.json({
        message: "Không có sản phẩm nào",
      });
    }
    return res.json(products);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const get = async function (req, res) {
  try {
    const product = await Product.findById(req.params.id).populate("categoryId");
    if (!product) {
      return res.json({
        message: "Không có sản phẩm nào",
      });
    }
    await Category.findByIdAndUpdate(product.categoryId, {
      $addToSet: {
          products: product._id,
      },
  });
  return res.json(product);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const create = async function (req, res) {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    
    const product = await Product.create(req.body);
    if (!product) {
      return res.json({
        message: "Không được thêm sản phẩm",
      });
    }
    return res.json({
      message: "Thêm sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    return res.status(402).json({
      message: error.message,
    });
  }
};
export const update = async function (req, res) {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.json({
        message: "Cập nhật sản phẩm không thành công",
      });
    }
    return res.json({
      message: "Cập nhật sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    return res.status(402).json({
      message: error.message,
    });
  }
};
export const remove = async function (req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.json({
      message: "Xóa sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(402).json({
      message: error.message,
    });
  }
};

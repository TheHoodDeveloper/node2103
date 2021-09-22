const Category = require('../models/Category');

const ApiError = require('../utils/errorHandler');

exports.create = async (req, res, next) => {
  try {
    const categoryExists = await Category.findOne({
      title: req.body.title.toLowerCase(),
    });
    if (categoryExists) {
      return next(new ApiError('category already exist', 400));
    }

    const category = await Category.create({
      title: req.body.title.toLowerCase(),
    });
    res.status(201).json({
      status: 'success',
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllCategory = async (req, res, next) => {
  try {
    const category = await Category.find();
    res.status(201).json({
      status: 'success',
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

const Category = require('../models/categoryModel');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createCategory = async (req, res) => {
    try {
        if(req.body.parent){
            const parentCategory = await Category.findOne({name: req.body.parent});
            console.log(parentCategory);
            if(!parentCategory) {
                res.status(404).json({message: 'Parent category not found'});
                return;
            }
        }
        const category = await Category.create(req.body);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findByIdAndUpdate(id, req.body);
        if(!category) {
            res.status(404).json({message: 'Category not found'});
            return;
        }

        const updatedCategory = await Category.findById(id);
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findByIdAndDelete(id);
        if(!category) {
            res.status(404).json({message: 'Category not found'});
            return;
        }
        res.status(200).json({message: "Category deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}
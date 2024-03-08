const Tag = require('../models/tagModel');

const getAllTags = async (req, res) => {
    try {
        const tags = await Tag.find();
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getTag = async (req, res) => {
    try {
        const tag = await Tag.findById(req.params.id);
        res.status(200).json(tag);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createTag = async (req, res) => {
    try {
        const tag = await Tag.create(req.body);
        res.status(200).json(tag);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


const updateTag = async (req, res) => {
    try {
        const id = req.params.id;
        const tag = await Tag.findByIdAndUpdate(id, req.body);
        if(!tag) {
            res.status(404).json({message: 'Tag not found'});
            return;
        }

        const updatedTag = await Tag.findById(id);
        res.status(200).json(updatedTag);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteTag = async (req, res) => {
    try {
        const id = req.params.id;
        const tag = await Tag.findByIdAndDelete(id);
        if(!tag) {
            res.status(404).json({message: 'Tag not found'});
            return;
        }
        res.status(200).json({message: "Tag deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getAllTags,
    getTag,
    createTag,
    updateTag,
    deleteTag
}
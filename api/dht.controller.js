const express = require("express");
const router = express.Router();

const dataDHT = require('../models/dataModels');

//Read Data
router.get('/', async (req, res) => {
    try{
        const post = await dataDHT.find();
        if(!post) throw Error("Terdapat Kegagalan");
        res.status(200).json(post);
    }catch (err){
        res.status(400).json({msg: err});
    }
})

//Get Data byID
router.get('/:id', async (req, res) => {
    try{
        const post = await dataDHT.findById(req.params.id);
        if(!post) throw Error("Terdapat Kegagalan");
        res.status(200).json(post);
    }catch (err){
        res.status(400).json({msg: err});
    }
})

//Menambah Data
router.post ('/', async (req,res) => {
    const newPost = new dataDHT(req.body);

    try{
        const post = await newPost.save();
        if(!post) throw Error("Terdapat Kegagalan");
        res.status(200).json(post);
    }catch(err){
        res.status(400).json({msg: err});
    }
})

//Hapus Data
router.delete ('/:id', async (req,res) => {
    try{
        const post = await dataDHT.findByIdAndDelete(req.params.id);
        if(!post) throw Error("Terdapat Kegagalan");
        res.status(200).json({succes : true});
    }catch (err){
        res.status(400).json({msg: err});
    }
})

//Update Data Mahasiswa
router.put('/:id', async (req,res) => {
    try{
        const post = await dataDHT.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
        if(!post) throw Error("Terdapat Kegagalan");
        res.status(200).json({succes : true});
    }catch (err){
        res.status(400).json({msg: err});
    }
})

module.exports = router;
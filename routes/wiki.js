const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const { db, Page, User } = require('../models');
const addPage = require('../views/addPage.js')

router.get( '/', async(req,res) => {
  await db.sync();
  const pages = await Page.findAll();
  res.send(pages)
})

router.post('/', async(req, res, next) => {
  
try {
  await Page.sync()
  await Page.create({
    title: req.body.title,
    content: req.body.content,
  })
  console.log(req.body.title)
 res.redirect('/')
} catch(error) {next(error)}
})

router.get('/add', (req, res) => {
  res.send(addPage())
})

module.exports = router;
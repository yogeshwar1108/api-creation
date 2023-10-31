const express = require("express");
const movieControlers = require ('../controllers/moviesControler')
const movie = require('../modal/Movie')
const router = express.Router()
router.post('/add-movies',movieControlers.movieinfo)
router.get ('/get-movies',movieControlers.getmovies)
module .exports= router;
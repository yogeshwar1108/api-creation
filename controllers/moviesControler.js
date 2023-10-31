const Movie = require("../modal/Movie");

const movieinfo = async (req, res) => {
  try
   {
    const { tittle, year, ott } = req.body;
    const moviee = new Movie({
      tittle,
      year,
      ott,
    });
    await moviee.save();
    res.status(201).json(moviee);
    console.log("Data entry done to data base")
  } 
  catch (error)
   {
    console.log(`The error is ${error}`);
    res.status(500).json({ message: "Server error" });
  }
};

const getmovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    console.log(`The error is `, error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { movieinfo, getmovies };

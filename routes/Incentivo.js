const router = require("express").Router();
const User = require("../models/gh");
const Incentivo = require("../models/Incentivo");

//CREATE Incentivo
router.post("/", async (req, res) => {
  const newIncentivo = new Incentivo(req.body);
  try {
    const savedIncentivo = await newIncentivo.save();
    res.status(200).json(savedIncentivo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE Incentivo
router.put("/:id", async (req, res) => {
  try {
    const Incentivo = await Incentivo.findById(req.params.id);
    if (Incentivo.username === req.body.username) {
      try {
        const updatedIncentivo = await Incentivo.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedIncentivo);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only  Incentivos you have created!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE Incentivo
router.delete("/:id", async (req, res) => {
  try {
    const Incentivo = await Incentivo.findById(req.params.id);
    if (Incentivo.username === req.body.username) {
      try {
        await Incentivo.delete();
        res.status(200).json("Incentivo has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your Incentivo!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Incentivo
router.get("/:id", async (req, res) => {
  try {
    const Incentivo = await Incentivo.findById(req.params.id);
    res.status(200).json(Incentivo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL IncentivoS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let Incentivos;
    if (username) {
      Incentivos = await Incentivo.find({ username });
    } else if (catName) {
      Incentivos = await Incentivo.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      Incentivos = await Incentivo.find();
    }
    res.status(200).json(Incentivos);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
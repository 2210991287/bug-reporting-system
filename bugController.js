const Bug = require('../Models/bugModel');

exports.submitBug = async (req, res) => {
  try {
    const { title, priority, description } = req.body;
    const newBug = new Bug({ title, priority, description });
    await newBug.save();
    res.status(201).json({ message: 'Bug submitted successfully!', bug: newBug });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting bug', error });
  }
};

exports.viewAllBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bugs', error });
  }
};


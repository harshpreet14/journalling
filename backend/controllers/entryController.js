const Entry = require('./../models/entryModel');

//a specific entry for a logged-in user
exports.getEntry = async (req, res) => {
    const { entry_id } = req.params;
    const user_id = req.user._id; 
  
    try {
      const entry = await Entry.findOne({ _id: entry_id, user: user_id });
      if (!entry) {
        return res.status(404).json({
          status: 'fail',
          message: 'Entry not found',
        });
      }
      res.status(200).json({
        status: 'success',
        data: {
          entry,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  };
  
//updating entry 
exports.updateEntry = async (req, res) => {
    const { entry_id } = req.params;
    const user_id = req.user._id; // Assuming user ID is available in the req.user object

    try {
        const updatedEntry = await Entry.findOneAndUpdate(
        { _id: entry_id, user: user_id },
        req.body,
        { new: true, runValidators: true }
        );
        if (!updatedEntry) {
        return res.status(404).json({
            status: 'fail',
            message: 'Entry not found',
        });
        }
        res.status(200).json({
        status: 'success',
        data: {
            entry: updatedEntry,
        },
        });
    } catch (err) {
        res.status(400).json({
        status: 'fail',
        message: 'Invalid data sent!',
        });
    }
};

// deleting entry 
exports.deleteEntry = async (req, res) => {
    const { entry_id } = req.params;
    const user_id = req.user._id; // Assuming user ID is available in the req.user object

    try {
        const deletedEntry = await Entry.findOneAndDelete({
        _id: entry_id,
        user: user_id,
        });
        if (!deletedEntry) {
        return res.status(404).json({
            status: 'fail',
            message: 'Entry not found',
        });
        }
        res.status(204).json({
        status: 'success',
        data: null,
        });
    } catch (err) {
        res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        });
    }
};


exports.getAllEntries = async (req, res) => {
  const userId = req.headers.user_id; // Get the user_id from the headers

  try {
    const entries = await Entry.find({ user: userId });
    res.status(200).json({
      status: 'success',
      results: entries.length,
      data: {
          entries,
      },
      });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      });
  }
};


exports.createEntry = async (req, res) => {
  const { content } = req.body;
  const userId = req.headers.user; // Get the user_id from the headers

  try {
    const newEntry = await Entry.create({ content, user: userId });
    res.status(201).json({
      status: 'success',
      data: {
        entry: newEntry,
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid data sent!',
    });
  }
};




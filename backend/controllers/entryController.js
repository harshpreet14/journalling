const Entry = require('./../models/entryModel');

//a specific entry for a logged-in user
exports.getEntry = async (req, res) => {
    const {entryId} = req.params;
    const {userId} = req.params;

    try {
        const entry = await Entry.findOne({_id: entryId, user_id: userId});
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

exports.getAllEntries = async (req, res) => {
    const {userId} = req.params;

    try {
        const entries = await Entry.find({user_id: userId});
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
            message: error.message,
        });
    }
};

//updating entry 
exports.updateEntry = async (req, res) => {
    const {entryId} = req.params;
    const {userId} = req.params;
    const {transcript, ai_insights} = req.body;

    try {
        const entry = await Entry.findOneAndUpdate(
            {_id: entryId, user_id: userId},
            {transcript, ai_insights},
            {new: true}
        );
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

// deleting entry 
exports.deleteEntry = async (req, res) => {
    const {entryId} = req.params;
    const {userId} = req.params;

    try {
        const deletedEntry = await Entry.findOneAndDelete({
            _id: entryId,
            user_id: userId,
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
            message: err.message,
        });
    }
};


exports.getAllEntries = async (req, res) => {
    const {userId} = req.params; // Get the user_id from the headers
    
    try {
        const entries = await Entry.find({user_id: userId});
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
            message: error.message,
        });
    }
};


exports.createEntry = async (req, res) => {
    const {userId} = req.params;

    try {
        const newEntry = await Entry.create({
            user_id: userId,
            ...req.body
        });
        res.status(201).json({
            status: 'success',
            data: {
                entry: newEntry,
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};

exports.getEntriesByDate = async (req, res) => {
    const { userId, date } = req.params;

    try {
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1); // Get entries for the entire day
        const entries = await Entry.find({
            user_id: userId,
            created_at: { $gte: startDate, $lt: endDate },
        });
        res.status(200).json({
            status: 'success',
            data: {
                entries,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};






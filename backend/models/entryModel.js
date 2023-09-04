const mongoose = require('mongoose');

const aiInsightsSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    insight: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true
    }
});

const entrySchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    transcript: {
        type: String,
        required: true,
    },
    ai_insights: [aiInsightsSchema], // Optional field, can be an empty array
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    compiled_at: {
        type: Date,
        default: null,
    },
    is_compiled: {
        type: Boolean,
        default: false,
    }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;

const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Animal = new Schema(
    {
        name: { type: String, required: true },
        scientific_name: { type: String, required: true },
        description: { type: String, required: true },
        region: { type: String, required: true },
        image: { type: String, required: true },
        hasFur: { type: Boolean, required: true },
        habitat: { type: Schema.Types.ObjectId, ref: 'habitat_id' }
    },
    { timestamps: true },
)

module.exports = mongoose.model('animal', Animal)
import mongoose from 'mongoose'

// create collection
//tari9a 9dima
//const Contact = mongoose.model('Contact', { name: String, phone: Number })
//tari9a s7i7a
const contactSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 150
    },
    phone : {
        type: Number,
        required: true
    }},
    {
        timestamps: true
    }
)


const Contact = mongoose.model('Contact', contactSchema)
export default Contact
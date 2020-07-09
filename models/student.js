const mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
const studentSchema = mongoose.Schema({
    student_number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    year: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    }

});
studentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('student', studentSchema);
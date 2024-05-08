import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourse : [{ type: Schema.Types.ObjectId, ref: 'Course' }]
    // purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
})

const adminSchema = new mongoose.Schema({
    username : String,
    password : String,
})
const courseSchema = new mongoose.Schema({
    title : String,
    description : String,
    price : Number,
    imageLink : String,
    published : Boolean,
})

mongoose.model('User' , userSchema);
mongoose.model('Admin' , adminSchema);
mongoose.model('Course' , courseSchema);

export { User, Admin, Course };

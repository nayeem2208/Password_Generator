import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,

  },
  generatedPassword:[
    {
      type:String
    }
  ]
});
userSchema.methods.matchpassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword =await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();   
  } catch (error) {
    return next(error);
  }
});


const userModel=mongoose.model('user',userSchema)

export default userModel

import mongoose from 'mongoose'


const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGOURL);
      console.log("mongodb connected");
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  };
  
  export default connectDB;
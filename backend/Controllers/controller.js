import userModel from "../models/user.js";
import generateToken from "../utils/jwt.js";

const register = async (req, res) => {
  try {
    let data = req.body;
    let { email, password } = data;
    let emailExist = await userModel.find({ email: email });
    if (emailExist.length > 0) {
      res.status(409).json({ message: "Email already exists" });
    } else {
      let user = await userModel.create({
        email,
        password,
      });
      const token = generateToken(res, user._id);
      res.status(200).json({ user, token });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json("its not working");
  }
};

const login = async (req, res) => {
  try {
    let data = req.body;
    let { email, password } = data;
    let user = await userModel.findOne({ email });
    if (user) {
      if (await user.matchpassword(password)) {
        let token = generateToken(res, user._id);
        res.status(200).json({ user, token });
      } else {
        res.status(401).json("Wrong password");
      }
    } else {
      res.status(401).json("Wrong email");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const addPassword = async (req,res) => {
  try {
    let id=req.body.id
    let password=req.body.password
    let user=await userModel.findOne({_id:id})
    if(!user.generatedPassword.includes(password)){
      user.generatedPassword.push(password)
    }
    await user.save()
    res.status(200).json('Saved')
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
};

const getPasswords = async (req, res) => {
  try {
    console.log(req.query)
    const password = await userModel.findOne({ _id:req.query.user});
    
    if (!password) {
      return res.status(400).json({ error: 'User not found' });
    }

    res.status(200).json({ password: password.generatedPassword });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};





const deletePassword=async(req,res)=>{
  try {
    const user = req.query.user
    const password = await userModel.findOne({ _id: user});
    const indexToDelete = req.body.index;
    password.generatedPassword.splice(indexToDelete, 1);
    await password.save();
    res.status(200).json('deleted')
  } catch (error) {
    res.status(400).json(error)
  }
}

const check = (req, res) => {
  console.log("yes");
  res.status(200);
};

export { register, login, check,addPassword,getPasswords,deletePassword };

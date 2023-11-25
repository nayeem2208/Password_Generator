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
    console.log(req.body,'data')
    let data = req.body;
    let { email, password } = data;
    console.log(email,'email')
    let user = await userModel.findOne({ email });
    console.log(user,'user')
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

const check = (req, res) => {
  console.log("yes");
  res.status(200);
};

export { register, login, check };

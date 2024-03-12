const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');
const User = require('../model/user.js');


const loggedInUsers = {}; // Object to store logged-in users

// export const register = async (req, res) => {
//     try {
//         const user = req.body;

//         const newUser = new User(user);
//         await newUser.save();

//         return res.status(200).json({ msg: "User Registered Successfully", success: true});
//     } catch (error) {
//         return res.status(400).json({ msg: "Error while register user"})
//     }
// };

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with the hashed password
    const newUser = new User({ username, email, password: hashedPassword });
    // console.log(newUser)
    await newUser.save();

    return res.status(200).json({ msg: "User Registered Successfully", success: true });
  } catch (error) {
    return res.status(400).json({ msg: "Error while registering user" });
  }
};


const login = async (req, res) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  try {
    const { email, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ email });

    if (!user) {
      // User not found
      return res.status(401).json({ msg: "Invalid username or password" });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // Passwords match, user is authenticated
      // Set user session
      // req.session.isLoggedIn = true;
      // req.session.user = user;

      loggedInUsers[user._id] = true;

      // Generate JWT token
      const token = Jwt.sign({ userId: user._id }, jwtSecretKey, { expiresIn: '1h' });
      // loggedInUsers(user._id);
      return res.status(200).json({ token, name: user.username, userId: user._id, msg: "Login successful", success: true });
    } else {
      // Passwords do not match
      return res.status(401).json({ msg: "Invalid username or password" });
    }
  } catch (error) {
    // console.error(error)
    return res.status(500).json({ msg: "Error while logging in" });
  }
};



const login2 = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user in the database by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the stored password
    // const passwordMatch = await user.comparePassword(password);
    if (user.password === password) {
      res.status(201).json({ msg: "You are logged in successfully!!" });
    }

    // Check if the passwords match
    // if (!passwordMatch) {
    //     return res.status(401).json({ error: 'Incorrect password' });
    // }

    // Redirect to the dashboard page
    res.json({ message: 'Successfully Logged In' });
    res.redirect('/dashboard');
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};



const logout = (req, res) => {
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
  }).status(200).json("User has been logged out Successfully");
  
  delete loggedInUsers[req.session.user._id];
};


// Function to print all logged-in users
const printLoggedInUsers = (req, res) => {
  const users = Object.keys(loggedInUsers);
  res.status(200).json(users);
};

module.exports = {
  register,
  login,
  logout,
  printLoggedInUsers,
}

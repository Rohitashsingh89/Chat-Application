const User = require("../model/user.js");

const createuser = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const newuser = await User.findOne({email});
        if(!newuser) {
            return res.status(400).json({ msg: "User already exists" });
        }
        const data = User({username, email, password});
        await data.save()

        return res.status(201).json('User Created Successfully');
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while creating the user" });
    }
    
}

const getusers = async (req, res) => {
    try {
        const getusers = await User.find({});
        if(!getusers) {
            return res.status(400).json({ msg: "No User Found" });
        }

        return res.status(200).json(getusers);
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while fetching users" });
    }
}

const getuser = async (req, res) => {
    try {
        const _id = req.params._id;
        const getuser = await User.findById({ _id });
        if(!getuser) {
            return res.status(400).json({ msg: "No User Found" });
        }

        return res.status(200).json(getuser);
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while fetching user" });
    }
}

const updateuser = async (req, res) => {
    try {
        const _id = req.params._id;
        const getuser = await User.findByIdAndUpdate( _id, req.body, {
            new : true
        });
        if(!getuser) {
            return res.status(400).json({ msg: "No User Found" });
        }

        return res.status(200).json(getuser);

    } catch (error) {
        return res.status(500).json({ error: "An error occurred while updating user" });
    }
}

const deleteuser = async (req, res) => {
    try {
        const _id = req.params._id;
        const getuser = await User.findByIdAndDelete({ _id });
        if(!getuser) {
            return res.status(400).json({ msg: "No User Found" });
        }

        return res.status(200).json('User Deleted Successfully');

    } catch (error) {
        return res.status(500).json({ error: "An error occurred while deleting user" });
    }
}

module.exports = {
    createuser,
    getuser,
    getusers,
    updateuser,
    deleteuser
}
  

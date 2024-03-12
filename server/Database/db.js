const mongoose = require("mongoose");

const Connection = async () => {
    const url = process.env.DATABASE
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to the database", error);
    }
}

module.exports = {
    Connection
};

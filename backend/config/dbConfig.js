const {mongoose} = require("mongoose");

async function mongoConnect() {
    await mongoose.connect(process.env.DB_URl)
        .then(() => console.log("DB connected"))
        .catch((err) => console.log(err));
}

module.exports = mongoConnect;
import mongoose from "mongoose";

mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => {
        console.log("connected to database")
    })
    .catch(err => {
        console.error("mongoose connection error", err)
    })


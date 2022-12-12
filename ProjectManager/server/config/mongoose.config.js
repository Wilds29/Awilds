const mongoose = require("mongoose");

const database = "Product"

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`established SuperServer connection systems ${database}`))
.catch((err) => console.log(`error establishing connection to SuperServer systems ${err}`))


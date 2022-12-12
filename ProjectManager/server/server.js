const express = require("express")
const cors = require("cors");
const app = express();
const port = 8000;

require("./config/mongoose.config")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// executing the code in the route file
require("./routes/product.routes")(app);


app.listen(port, () => {console.log(`welcome to the SuperServer of ${port}`)})
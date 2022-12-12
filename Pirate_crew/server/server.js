const express = require("express")
const cors = require("cors");
const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


require("./config/mongoose.config")
// executing the code in the route file
require("./routes/pirate.routes")(app);


app.listen(port, () => {console.log(`welcome to the SuperServer of ${port}`)})
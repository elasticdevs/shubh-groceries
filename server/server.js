const express = require("express");
const cors = require("cors");
const productUsers = require("./routes/users/users.js");
const admin = require('./routes/admin/admin.js');


const app = express();
const port = 8080;


app.use(cors());
app.use(express.json());

app.use('/products', productUsers);
app.use('/admin', admin);


app.get('/', (req, res) => {
    res.send("Hello World")
})



app.listen(port, () => console.log(`server running on port ${port}`));
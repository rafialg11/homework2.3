const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const db = require('./models/')
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Database connected!`)
    }).catch((err) => {
        console.log(`Cannot connect to DB`, err)
        process.exit()
    });

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
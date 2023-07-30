const express = require('express');
const app = express();
const appRoutes = require('./routes/routes');
const PORT = process.env.PORT || 5000;


// middleware
app.use(express.json())
// routes
app.use("/api", appRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
import express from "express"
import router  from "./src/routes/route"

const PORT = 3000

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

// Parse incoming JSON payloads
app.use(express.json());
app.use("/api", router)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})
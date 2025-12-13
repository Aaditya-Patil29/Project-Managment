import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js"

dotenv.config({
    path: "./.env",
})

const port = process.env.PORT || 3000;

connectDB()
.then((err) => {
  app.listen(port, () => {
    console.log(`Exmaple app listeninig on port https://localhost:${port}`);
  });

})
.catch((err )=> {
  console.error("MongoBD connection error:", err)
  process.exit(1)
})
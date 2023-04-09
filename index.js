const express = require("express")
const cors = require("cors")
const app = express()
const fs = require("fs")  
const jsonData = fs.readFileSync("./jobs.json", "utf-8");
const jobData = JSON.parse(jsonData)
const port = 5000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).send("Job Board Api.")
})

app.get('/job', (req, res) => {
  res.status(200).send(jobData)
})

app.get("/job/:id",(req, res) =>{
  const id = parseInt(req.params.id);
  const response = jobData[id];
  res.status(200).send(response);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require("express");
const cors = require("cors");
 const fetch = require("node-fetch");
const connection = require("./Config/db.js");
const ProjectModel = require("./Models/project.model.js");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/getall", async (req, res) => {
 
  const result = await fetch("https://randomuser.me/api/?results=50");
  const body = await result.json();
console.log(body.results);

// body.results.map(elem=>(
//   new ProjectModel({
//     gender: elem.gender,
//   name: elem.name,
//   location: elem.location,
//   email: elem.email,
//   login: elem.login,
//   dob: elem.dob,
//   registered: elem.registered,
//   phone: elem.phone,
//   cell: elem.cell,
//   id: elem.id,
//   picture: elem.picture,
//   nat: elem.nat
//   })

// ))

ProjectModel.insertMany(body.results, function(err, res) {
  if (err) throw err;
  console.log("Number of documents inserted: " + res.insertedCount);
});
res.send("updated")


});


  

app.get('/', async(req, res)=>{
  const {page,limit,filter}=req.query;
  console.log(page,limit,filter);
  if(filter !=""){
      const Alldata=await ProjectModel.find({gender:filter}).skip((page-1)*limit).limit(limit);
     console.log(Alldata.length)
      res.send(Alldata);
  }
  else{
      const AllJobs=await ProjectModel.find({}).skip((page-1)*limit).limit(limit);
      res.send(AllJobs);
  } 
    

})

app.delete('/delete', async(req, res)=>{
    const result = await ProjectModel.deleteMany({});
    res.send({"msg":"Data Removed"});
})

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
});

const express = require('express');
const router = express.Router();

const students = [
    {
  "id": 123,
  "name": "Arjun",
  "email": "Something@gmail.com",
  "age": 20,
  "course": "btech"
},
    {
  "id": 1234,
  "name": "Arjun2",
  "email": "Something2@gmail.com",
  "age": 21,
  "course": "btech"
},
    {
  "id": 12345,
  "name": "Arjun3",
  "email": "Something3@gmail.com",
  "age": 23,
  "course": "btech"
},
    {
  "id": 123456,
  "name": "Arjun4",
  "email": "Something4@gmail.com",
  "age": 24,
  "course": "btech"
},

]

// 1. No need to add Port number here
// 2. Routes assumes that body is already parseble
// 3. filter returns array; find returns element


router.get("/", (req,res) => {
    return res.json(students);
})
router.get("/:id", (req,res) => {
    let student = students.find((s => s.id == req.params.id));
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json(student);
})

// post
router.post("/", (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const id = students[students.length - 1].id + 1;
    const age = req.body.age;
    const course =req.body.course;

    if(!name || !email || !age || !course){
        console.log("Please provide all the valid fields");
        return res.status(400).send("Missing Fields");
    }


    const newS = {name, email, id, age, course};
    students.push(newS);
    return res.status(201).send("New student successfully added");

})

// put
router.put("/:id", (req,res) => {
    const userId = req.params.id;
    
    const newName = req.body.name;
    const newEmail = req.body.email;
    if(!newName || !newEmail) return res.status(500).send("Missing new name and email");


    const tempS = students.find((s => s.id == userId));
    if (!tempS) {
        return res.status(404).json({ message: "Student not found" });
        }

    tempS.name = newName;
    tempS.email = newEmail;

    return res.status(200).send("Updated Successfully for the following user $userId")

})

//delete
router.delete("/:id", (req,res) => {
    const userId = req.params.id;
    const idx = students.findIndex(s => s.id == userId);
    if(idx == -1) return res.status(500).send("No such user exists");


    students.splice(idx,1);

    return res.status(200).send("User with ID $userId is successfully deleted")

})
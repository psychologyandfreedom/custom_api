import express from "express";
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = [];


router.get("/users", (req, res) => {
    res.send(users);
});

router.post("/users", (req, res) => {
    const user = req.body;  
    users.push({...user, id: uuidv4()});
    res.send(`User with the name ${user.firstName} added to the database.`);
});

router.get("/users/:id", (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)
    
    res.send(foundUser)
});

router.delete("/users/:id", (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id)

    res.send(`User with the id ${id} deleted from the database `)
});

router.patch("/users/:id", (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    res.send(`user with id ${id} has been updated`)
});

export default router;
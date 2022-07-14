import { Router } from "express";
const router = Router();

const persons = [
  { nombre: "Juan", apellido: "Perez", edad: 30 },
  { nombre: "Bruce", apellido: "Dickenson", edad: 65 },
  { nombre: "Gustavo", apellido: "Garzon", edad: 55 },
];

router.get("/persons", (req, res) => {
    res.send(persons);
});

router.post("/persons", (req,res) => {
    let newPerson = req.body;
   persons.push(newPerson);
   res.send({
    message: "Persona Adherida"
   });
})

export default router;

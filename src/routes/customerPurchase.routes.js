const express = require('express')
const customer_model = require('../models/customerPurchase.model')
const customer_routes = express.Router()

/* Solicitudes HTTP:

    POST: crear nuevo registro
    GET: listar
    ---------------------------------------------------------------------
    GET{id} : ver info en detalle, recibe como parametro el id
    PUT{id}: actualizar registro existente, recibe como parametro el id
    DELETE{id}: eliminar registro existente, recibe como parametro el id
*/

customer_routes.post('/customers', (req, res) => {
    const new_person = customer_model(req.body)
    new_person
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

customer_routes.get('/customers', (req, res) => {
    customer_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

customer_routes.get('/customers/:id', (req, res) => {
    const { id } = req.params;
    customer_model
        .findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// customer_routes.put('/customers/:id', (req, res) => {
//     const { id } = req.params;
//     const {username, lastname, age, email} = req.body //Todos los campos que conforma el modelo, deben tener el mismo nombre
//     customer_model
//         .updateOne({ _id: id}, { $set: { username, lastname, age, email } })
//         .then((data) => res.json(data))
//         .catch((err) => res.json({message: err}));
// });

customer_routes.delete('/customers/:id', (req, res) => {
    const { id } = req.params;
    customer_model
        .deleteOne({ _id: id})
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// // Get por Referencia
// customer_routes.get('/customers/:ref', (req, res) => {
//     const { ref } = req.params;
//     customer_model
//         .findById(id)
//         .then((data) => res.json(data))
//         .catch((err) => res.json({message: err}));
// });

module.exports = customer_routes
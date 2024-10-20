const express = require('express');
const router = express.Router();
const ModelTareas = require('../models/tareamodel');

// Obtener todas las tareas
router.get('/tareas', async (req, res) => {
    try {
        const tareas = await ModelTareas.find(); 
        res.status(200).send(tareas);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener las tareas', error });
    }
});

module.exports = router;

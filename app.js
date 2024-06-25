/*const express = require('express');

const app = express ();
app.get('/', (req, res)=>{
    res.send('prueba 1 del servidor');
});

app.listen(10000);*/


// CONEXION A BASE DE DATOS

/*
const express = require('express');

const app = express ();
const mongoose = require('mongoose');

//Creación de rutas

app.get('/', (req, res) => {
    res.send('prueba 1 respuesta del servidor');
});

// Conexion a BD
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://afar123456:lMFYzIeQjfZ65QFe@cluster0.ubhkjww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Si hay conexión');
    } catch (error) {
        console.error('Error conectando a la base de datos:', error);
        process.exit(1); // Detener la aplicación si no se puede conectar a la base de datos
    }
};

connectDB();

app.listen(10000);

*/



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express ();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a BD
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://afar123456:lMFYzIeQjfZ65QFe@cluster0.ubhkjww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error conectando a la base de datos:', error);
        process.exit(1);
    }
};

connectDB();

// Importar rutas
const postRoutes = require('./routes/post');

// Usar rutas
app.use('/api/posts', postRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API REST funcionando');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
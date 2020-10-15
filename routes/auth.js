
    /*
    Path:/api/login
     */




    const {googleSignIn} =require( "../controllers/auth");

    const { Router } = require('express');
   const {login}= require('../controllers/auth');
   const {check} = require( "express-validator");
    const {validarCampos} = require( "../middlewares/validar-campos");

const router = Router();

    router.post('/',
        [

           check('password','La contraseña es obligatoria').not().isEmpty(),
          check('email','El correo es obligatorio').isEmail(),
         validarCampos
        ],
  login
    );

    router.post('/google',
        [

            check('token','El token de google es obligatoria').not().isEmpty(),
            validarCampos
        ],
        googleSignIn
    );






   module.exports= router;
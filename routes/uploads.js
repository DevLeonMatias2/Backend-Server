
/*

ruta:api/uploads

 */

const  {retornaImagen} = require('../controllers/uploads');

const { Router } = require('express');

const expresSFileUpload = require('express-fileupload');
const { validarJWT} = require('../middlewares/validar-jwt');

const {fileUpload} = require( "../controllers/uploads");



const router = Router();

router.use(expresSFileUpload());




router.put('/:tipo/:id', validarJWT, fileUpload );

router.get('/:tipo/:foto', retornaImagen );




module.exports = router;
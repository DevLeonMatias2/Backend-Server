

const { Schema, model } =  require('mongoose');


const MedicoSchema = Schema({

    nombre: {
        type:String,
        required: true
    },
    usuario: {
        type:Schema.Types.ObjectID,
        ref:'Usuario',
        required: true
    },
    hospital: {
        type:Schema.Types.ObjectID,
        ref:'Hospital',
        required:true
    },

});

MedicoSchema.method('toJSON',function () {
    const {__v, ...object}= this.toObject();
    return object;

});

module.exports = model('Medico', MedicoSchema);
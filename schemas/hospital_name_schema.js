const mongoose =  require('mongoose');

const Schema = mongoose.Schema;
const hospitalNameSchema = new Schema({
    hospital_name:String
},{ collection: 'tpa-master-data-collection' })


const Hospital =  mongoose.model('tpa-master-data-collection', hospitalNameSchema);

module.exports = Hospital;

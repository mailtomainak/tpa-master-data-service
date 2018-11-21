
 const error = require('./errors');
const Hospital = require('../schemas/hospital_name_schema');

exports.fetchHospitalNames = (req,res,next) =>{
    Hospital.find({'type':'HOSPITAL_NAMES'},(error,data)=>{
      
        if(error){
           return next(
            error.serverError
           )
        }
        res.send(200, data);
        next();
    })

}



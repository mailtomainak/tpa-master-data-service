
 const error = require('./errors');
const Hospital = require('../schemas/hospital_name_schema');

exports.fetchHospitalNames = (req,res,next) =>{   
    Hospital.find({'type':'HOSPITAL_NAMES',hospital_name : new RegExp(req.params.searchParam, 'i')},(error,data)=>{
      
        if(error){
           next(
            error.serverError
           )
        }
        res.send(200, data);
        next();
    })

}



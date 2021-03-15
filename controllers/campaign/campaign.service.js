
let response = { "status": 200, "response": "" };
let info = {"message":"","error":[]};
const validation = require(`${PROJECT_DIR}/utility/validation`);



module.exports = {
   getData
};

async function getData(req) {
    try{
        let validationError = [];
        validation.issetNotEmpty(req.query.campaign_id) ? true : validationError.push({ "field": "campaign_id", "message": "Mandatory parameter." });
        validation.issetNotEmpty(req.query.order_line_ids) ? true : validationError.push({ "field": "order_line_ids", "message": "Mandatory parameter." });
        validation.issetNotEmpty(req.query.date) ? true : validationError.push({ "field": "date", "message": "Mandatory parameter." });
      
        if (validationError.length == 0) {


            response.response = {
            "success": true,
            "message": "Campaign fetched successfully"
            };
            response.status = 200;
            return response;

        }else{

            response.response = { 'success': false, "data": [], "message": "Mandatory parameter(s) are missing." };
            response.status = 400;
            return response;
        }

    }catch (e) {
        console.log("Error :::::>>>>>>> 01:::::::", e);
        response.response = { 'success': false, "data": [], "message": "Internal server error." };
        response.status = 500;
        return response;
    }
}

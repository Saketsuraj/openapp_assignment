var express = require('express');
var router = express.Router();
var axios = require('axios');
var config = require('./../config/config');

//Get Magento Admin Token
function getMagentoAdminToken(){
    return axios.post(config.magentoBaseUrl+'/integration/admin/token', {
        username: config.magentoUserName,
        password: config.magentoPassword
    })
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        return error;
    });
}

//Fetch all products data using admin token
function getAllProductData(token){
    return axios.get(config.magentoBaseUrl+'/products?searchCriteria', {
        headers:{
            'Authorization': 'Bearer '+token,
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        return error;
    });
}

/* GET products listing API. */
router.get('/all', function(req, res, next) {

    if(req.cookies.magentoAdminToken !== null){ //Using the stored token cookie to avoid an extra call to fetch a new token
        getAllProductData(req.cookies.magentoAdminToken).then(resp=>{
            res.send(resp);
        },
        error=>{
            res.json({'error':true, 'message':'Error occurred while fetching products listing'});
        });
    }
    else{ //First Call
        getMagentoAdminToken().then(response=>{
            res.cookie('magentoAdminToken', response); //Storing the token in a cookie for future use
            getAllProductData(response).then(resp=>{
                res.send(resp);
            },
            error=>{
                res.json({'error':true, 'message':'Error occurred while fetching products listing'});
            });
        },
        error=>{
            res.json({'error':true, 'message':'Error occurred while fetching admin token'});
        });
    }

});

module.exports = router;
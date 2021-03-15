const axios = require('axios');

module.exports = {
    accessToken,
    updateLineItem,

}



async function accessToken(){
  return new Promise((resolve, reject) => {
        axios.post('https://test.salesforce.com/services/oauth2/token?password=ITGD@fc8&client_secret=2726F72018A4E4F98525E194DF413E8359C20AD8909C8704AF2EF572CE03EB6A&client_id=3MVG9iLRabl2Tf4iS2sCYKG8Q_nRa.kce_wdNrRW9g7XKLgVLcX7CAaLPWezXEmJJztdG635iHS1uAXkqUCc3&username=sanjay.nagpal-w7n4@force.com.itgdev&grant_type=password')
        .then(function (response) {
         
        //   console.log(response.data);
         
          resolve(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          reject(error)
          
        })
      });

}

async function updateLineItem(token){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    await axios.post('https://indiatoday--itgdev.my.salesforce.com/services/apexrest/InternalorderAPI/', 

    {
      "type": "update_lineitem",
      "lineitem": [
    
        {
      
          "Impression_Burned":"1",
          "unique_id":"a0J1y000001NEmjEAG"
        },
        {
      
          "Impression_Burned":"2",
          "unique_id":"a0J1y000001NEmkEAG"
        }
      ]
    },config)
      .then(function (response) {
        console.log(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
}



exports.get = function(request, response) {
    performRequest('/forecast', 'GET', '51.566827' , '-0.124969', function(data) {
        response.send(statusCodes.OK, { message : data} );
    });
};

function performRequest(endpoint, method, latitude, longitude, success) {
    var req = require('request');
    var host = 'api.forecast.io';
    var apiKey = '<<API KEY>>';  
  
  var url = 'https://' + host + endpoint + '/' + apiKey + '/' + latitude + ',' + longitude;
  
  //success(url);
  req.get(url, 
          function(err, response, body) {
            if (err) {
                success('Unable to connect to Sevice:' + url);
            } else if (response.statusCode !== 200) {
                success('Bad request: ' + url);
            } else {
                success(body);
            }
        });

  
}

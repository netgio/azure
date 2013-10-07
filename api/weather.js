exports.get = function(request, response) {

    if (request.query.lat != null && request.query.lon != null) {
        performRequest('/forecast', 'GET', request.query.lat , request.query.lat, function(data) {
            response.send(statusCodes.OK, { message : data} );
        });
    }
    else response.send(statusCodes.BAD_REQUEST, { message : 'Bad Parameters' });
};

function performRequest(endpoint, method, latitude, longitude, success) {
    var req = require('request');
    var host = 'api.forecast.io';
    var apiKey = 'fce0e1261fcf5165a51c242c3c43c0fe';  
  
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

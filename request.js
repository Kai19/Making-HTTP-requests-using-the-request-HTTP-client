var request = require('request');

var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', (err) => {
          console.log(err);
       })
       .on('response', (response) =>{
          console.log('Response is', response.statusMessage);
          console.log('Content-type:', response.headers['content-type']);
          console.log('Downloading image...');
       })
       .on('end', (response) =>{
          console.log('Download Complete.')
       })
       .pipe(fs.createWriteStream('./future.jpg'));

const rp = require('request-promise');
const url = 'https://buffy.fandom.com/wiki/Buffy_Summers';

rp(url)
  .then(function(html){
    console.log(html);
  })
  .catch(function(err){
    console.log(err);
  });

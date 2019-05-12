const crypto = require('crypto'),
wp = require('../');

(function(){

  let count = 0,
  nodeWP = crypto.createHash('whirlpool').update('testing').digest('hex'),
  browserWPSync = wp.encSync('testing', 'hex');

  function digestTest(){
    let dtest = ['base64', 'hex']
    dtest.forEach(function(i){
      let njs = crypto.createHash('whirlpool').update('testing').digest(i),
      bjs = wp.encSync('testing', i);

      if(njs === bjs){
        console.log(i + ' equal')
      } else {
        console.log(i + ' not equal')
      }
    })
  }

  console.log('Nodejs whirlpool:\n' + nodeWP + '\n')

  wp.enc('testing', 'hex', function(err, res){
    console.log('Browser whirlpool callback:\n' + res + '\n')
    if(nodeWP === res){
      console.log('whirlpool callback test pass' + '\n')
      count++
    } else {
      console.log('whirlpool callback test fail' + '\n')
    }
  });

  console.log('Browser whirlpool sync:\n' + browserWPSync + '\n')

  if(nodeWP === browserWPSync){
    console.log('whirlpool sync test pass' + '\n')
    count++
  } else {
    console.log('whirlpool sync test fail' + '\n')
  }


  wp.encP('testing', 'hex').then(function(res){
    console.log('Browser whirlpool promise:\n' + res + '\n')
    console.log('whirlpool promise test pass' + '\n')
    count++

  }).catch(function(err){
    console.log('whirlpool promise test fail' + '\n')
  }).then(function(){
    console.log('\ntest complete. ' + count + 'x test pass, ' + (3 - count) +'x test fail')

    digestTest()
  })

})()

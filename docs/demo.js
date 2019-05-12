// demo only

let obj = {
  hex: 'hex',
  base64: 'base64',
  bytes: 'bytes',
  Uint8: 'Uint8Array',
  ArrayBuffer: 'Uint8Array buffer'
}

$('body').append('<div class="container"><h1 class="text-center mb-4">whirlpool-js</h1><div class="row main"></div></div>');

$.each(obj, function(i,e){
  $.each(['sync','callback', 'promise'], function(w,x){
  $('.main').append('<div class="col-sm-4"><label>whirlpool hash to '+ e +' : '+x+'</label><input id="'+i+x+'" type="text" class="form-control mb-4" readonly></div>')
  })
})



function initTest(str){

  $.each(obj, function(i){
    //sync
    $('#'+i+'sync').val(wp.encSync(str, i))
    //callback
    wp.enc(str, i, function(err, res){
      if(err){return console.log(err)}
      $('#'+i+'callback').val(res)
    });

    wp.encP(str, i).then(function(res){
      $('#'+i+'promise').val(res)
    }).catch(function(err){
      console.log(err);
    })

  });
}


function shuffle() {
  let a = 'abcdefghijklmnopqrstuvwxyz1234567890';
  a = a.split('');
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.join('');
}

$(document).ready(function() {

  setInterval(function(){
    initTest(shuffle());
  },1000)
});

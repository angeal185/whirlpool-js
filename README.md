# whirlpool-js
whirlpool 512 bit hash in javascript for electron and the browser

Demo: https://angeal185.github.io/whirlpool-js

### Installation

npm

```sh
$ npm install whirlpool-js --save
```

bower

```sh
$ bower install whirlpool-js
```

git
```sh
$ git clone git@github.com:angeal185/whirlpool-js.git
```

### electron

```js
const wp = require('whirlpool-js');
```

#### browser

```html
<script src="./dist/whirlpool-js.min.js"></script>
```

#### Digests
* hex: returns hash as a hex encoded string
* base64: returns hash as a base64 encoded string
* bytes: returns hash as a byte string
* Uint8: returns hash as a Uint8Array
* ArrayBuffer: returns hash as an arraybuffer

#### API

```javascript

/**
 *  sync
 *  @param {string} str ~ valid string to be hashed
 *  @param {string} digest ~ hex/base64/Uint8/ArrayBuffer/bytes
 **/
wp.encSync(str, digest)


/**
 *  callback
 *  @param {string} str ~ valid string to be hashed
 *  @param {string} digest ~ hex/base64/Uint8/ArrayBuffer/bytes
 *  @param {function} cb ~ callback function(err,res)
 **/
wp.enc(str, digest, cb)


/**
 *  promise
 *  @param {string} str ~ valid string to be hashed
 *  @param {string} digest ~ hex/base64/Uint8/ArrayBuffer/bytes
 **/
wp.encP(str, digest)


// demo
const str = 'test';

//sync
let sync = wp.encSync(str, 'hex');
console.log(sync);
//returns hex encoded hash


//callback
wp.enc(str, 'base64', function(err, res){
  if(err){return console.log(err)}

  console.log(res)
  //returns base64 encoded hash
});


//promise
wp.encP(str, 'Unit8').then(function(res){

  console.log(res);
  //returns Unit8Array of hash

}).catch(function(err){

  console.log(err);

}).then(function(){

  console.log('done');

})


```

var tessel = require('tessel');
var ambientlib = require('ambient-attx4');
var shush = require('./shush.js');
var ambient = ambientlib.use(tessel.port['A']);

ambient.on('ready', function () {
    var soundArr = [];
    // Get points of light and sound data.
    setInterval(function () {
        ambient.getSoundLevel( function(err, sounddata) {
            if (err) throw err;
            soundArr.push(sounddata.toFixed(8));
            if(soundArr.length === 9){ //every 27 seconds
                var avg = checkLoudness(soundArr);
                console.log("The sound array: " + soundArr);
                console.log("Average Sound Level: " + avg);
                soundArr = [];
                if(avg > 0.03){
                    alertLoudness();
                }
            }
            console.log("Sound Level:", sounddata.toFixed(8));
        });

    }, 3000); // The readings will happen every 3 seconds

});

ambient.on('error', function (err) {
    console.log(err);
});

shush();

function checkLoudness(arr){
   var sum = 0.0;
   for (var i = 0;i < arr.length;i++){
    sum += Number(arr[i]);
   }
   return sum / arr.length;
}

function alertLoudness(){
    console.log('SHUUUSSSHHHH');
    shush();
}


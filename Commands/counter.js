/**
 * @usage !setCounter <counterName>, !counter to increment the counter
 * @does creates a counter and counts
 */
module.exports = {

    setCounter: function(message){
        let fs = require('fs');
        let content = message.content.split(" ");
        if(content.length === 2){
            let newCounter = {
                "counter": message[1],
                "count": 0 
            }
            let data = JSON.stringify(newCounter);
            fs.writeFileSync("./Files/counter.json", data, (err) =>{if(err) return console.log(err);});
        }
    },

    counter: function(message){
        let fs = require('fs');
        let conent = message.content.split(" ");
        let data = JSON.parse(fs.readFileSync('./Files/counter.json',{encoding:'utf8'}));
        data.count++;
        fs.writeFileSync("./Files/counter.json", data, (err) =>{if(err) return console.log(err);});
        message.channle.send(data.counter + " = " + data.count);
        
    }
}
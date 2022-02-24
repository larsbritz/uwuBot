/**
 * @usage !counter <#channel> || !channel <true | false>
 * @does counts the words from all msg in a week
 */
module.exports = {
    channel: 0,
    switch: false,

    counter: function (message) {
        let fs = require("../Commands/setAnnoy")
        let content = message.content.split(" ");
        if (content.element = 2) {
            try {
                this.switch = JSON.parse(content[1].toLowerCase());
                message.channel.send("word counter " + this.switch + " 😎");
                return;
            } catch {
                if (fs.getId(content[1], '#') != "") {
                    this.channel = fs.getId(content[1], '#');
                    message.channel.send("channel set to " + `<#${this.channel}>` + " 👌");
                    return;
                }
                message.channel.send("Invalid input");
            }
        }
    },

    incrementWord: function (message, array) {
        let content = message.content.split(" ");
        if (content[0].startsWith('!') || content[0].startsWith('https')) return;
        let newArr = [];
        content.forEach(element => {
            let temp = element.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
            if(temp.includes("\n")){
                let tempR = temp.split("\n");
                tempR.forEach(elementR =>{
                    newArr.push(elementR);
    
                })
            } else {
                newArr.push(temp);
            }

        });

        newArr.forEach(element => {
            array[element] = (typeof array[element] === 'undefined') ? 1 : array[element] + 1;
        })
    }
}

const myString = {
    string: "Programming with Treehouse is fun!",
    countWords: function(){
        return this.string.split(" ").length;
    }
}

var numWords = myString['countWords']();

myString.characters = myString.string.length;




var dataModule = (function(){

    var shuffle =function()
    {
    var newArray = [];
    var randomIndex;
    while(array.lenght> 0)
    {

        randomIndex=Math.random()*array.length;
        randomIndex=Math.floor(randomIndex);
        randomElemnent =array[randomIndex];
        newArray.push(randomElemnent);
        array.splice(randomIndex,1);

    }
    return newArray;
    };
    String.prototype.capitalize=function()
    {
        var newString='';
        var firstCharCap=this.charAt(0).toUpperCase();
        var remainingChar=this.slice(1);
        newString =firstCharCap+remainingChar;
        return newString;
    };

    var capitalizeRandom;
    capitalizeRandom = function (arrayOfStrings) {
        return arrayOfStrings.map(function(currentWord)
        {
            var x= Math.random()*4;
            x=Math.floor(x);
            return (x==3) ? currentWord.capitalize(): currentWord;
        }
    );
    };
    var lineReturn= '|';
    var addRandomPunctuation = function(arrayOfStrings){
        return arrayOfStrings.map(function(currentWord)
        {
            var randomPunctuation;
            var items = ['?',',',',',',',',',',',',',',','.','.','.','.','.','.','.','.','!',randomPunctuation,'','','','','','','',''];
            var randomIndex = Math.random() *items.length;
            randomindex = Math.floor(randomIndex);
            randomPunctuation=items[randomIndex];
            return currentWord+randomPunctuation;
        });

    };
    var appData = {
        indicators: {
            testStarted: false, testEnded: false, totalTestTime: 0, timeLeft: 0
        },
        results: {
            wpm: 0, wpmChange: 0, cpm: 0, cpmChange: 0, accuracy: 0, accuracyChange: 0 ,   numOfCorrectWords: 0, numOfCorrectCharacters: 0 , numOfTestCharacters: 0
        },
        words: {
            currentWordIndex: 0, testWords: [], currentWord: {}
        },
    };



    //word constructor
//    {
//      value: {correct: '', user: '' , isCorrect: false },
//      characters: {correct: [], user: [], totalCorrect: 0, totalTest: 0 }
//    }

    var word = function(index){};

    //update method
    word.prototype.update = function(value){};

    return {
    //indicators - test Control

        setTestTime: function(x){},//sets the total test time to x

        initializeTimeLeft: function(){},//initializes time left to the total test time

        startTest: function(){},//starts the test

        endTest: function(){},//ends the test

        getTimeLeft: function(){},//return the remaining test time

        reduceTime: function(){},// reduces the time by one sec

        timeLeft: function(){},//checks if there is time left to continue the test

        testEnded: function(){},//checks if the test has already ended

        testStarted: function(){},//checks if the test has started

    //results

        calculateWpm: function(){},//calculates wpm and wpmChange and updates them in appData

        calculateCpm: function(){},//calculates cpm and cpmChange and updates them in appData

        calculateAccuracy: function(){},//calculates accuracy and accuracyChange and updates them in appData

    //test words

        // fills words.testWords

        fillListOfTestWords: function(textNumber, words){
            var result = words.split(" ");

            if(textNumber == 0){
                result=shuffle(result);
                result =capitalizeRandom(result);
                result =addRandomPunctuation(result);

            }


            appData.words.testWords = result;
        },

        getListofTestWords: function(){},// get list of test words: words.testWords

        moveToNewWord: function(){},// increments the currentWordIndex - updates the current word (appData.words.currentWord) by creating a new instance of the word class - updates numOfCorrectWords, numOfCorrectCharacters and numOfTestCharacters

        updateCurrentWord: function(value){},// updates current word using user input

        returnData()
        {
            return appData;
        }
    }

})();
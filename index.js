//Exercise 1
for (i = -3; i < 9; i++){
    console.log(i)
}

//Exercise 2
for (x = 0; x < 51; x++){
    if (x === 10)
    {
        console.log("TEN!!!");
    }
    else
    {
        console.log(x);
    }
}

//Exercise 3
var userInput1 = parseInt(prompt("Give me a number!"))
var userInput2 = parseInt(prompt("Give another one! (preferably higher than the first, but I still work either way)"))

for (y = userInput1; y <= userInput2; y++){
    console.log(y)
}
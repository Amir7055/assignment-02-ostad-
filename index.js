//1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

const calculateSum =(num1,num2)=>{
    const sUm= num1 + num2;
    return sUm;
    
}
{
const questionAnsOne=calculateSum(20,30)
console.log(questionAnsOne);
}

//2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

const isEven=(num)=>{
    const nuMber=num;
    if(nuMber %2==0){
        return true;
    }
    else if(nuMber==null) {
        const emptyNumber="write down a number where you calling function";
        return emptyNumber;
        
    }else{
        return false;
    }
}

{
    const questionAnsTwo=isEven(50);
    console.log(questionAnsTwo);
}

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

const findMax =(maxNumber)=>{
    let heightNumber =maxNumber[0];
    for(let i=1;i< maxNumber.length;i++)
        if(heightNumber < maxNumber[i]){
            heightNumber = maxNumber[i];
            
        }
        return heightNumber;

}
{
    const numberS=[50,30,80,60,90,45,30,];
    const questionAnsThree=findMax(numberS);
    console.log(questionAnsThree);
}

//4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.


const reverseString =(revers)=>{
    const reverseItem=revers.split("").reverse().join("");
    return reverseItem;

}

{
    const countryName = "Bangladesh";
    const questionAnsfour=reverseString(countryName);
    console.log(questionAnsfour);

}

//5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

const filterOddNumbers=(num)=>{
    return num.filter(filtered=>{
        return filtered%2!=0  
    })

}

{
   const numberOfarray=[1,2,3,6,5,4,9,8,7,25];
   const questionAnsfive=filterOddNumbers(numberOfarray);
   console.log(questionAnsfive);


}

//6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

const sumArray =(num)=>{
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum+=num[i];
        
    }
    return sum;

}

{
    const sumNumbers= [1,2,3,4,5,6,7,8,9];
    const resultSix=sumArray(sumNumbers);
    console.log(resultSix);

}
    


//7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

const sortArray =(num)=>{
    let itemNumbers=num.sort((a,b)=>{
       return  a-b
    })
   return itemNumbers;
}

{
   const numberOfitems=[30,65,25,36,5,85,96,75,45];
   const resultSeven=sortArray(numberOfitems);
   console.log(resultSeven);

}

//8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"

const capitalizeFirstLetter=(des)=>{
    let text=des.split("");
     text[0]=text[0].toUpperCase()
     return text.join("");
    
    

}

{
    
    console.log( capitalizeFirstLetter("hello"));
}
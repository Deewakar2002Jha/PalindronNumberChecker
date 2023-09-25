function checkForPalindro(n){//formal argument/parameter

    var isPalindrom = false;
    for((j=n.length-1); j>=0; j-- ){
        console.log(n.charAt(j))

        for(var i=0; i<n.length; i++){
        console.log(n.charAt(i));

            if(n.charAt(j) == n.charAt(i)){
                /* this condition check the output of both the loops and if value is same it give the out is number is palindrom*/
                isPalindrom = true;
            }
            else{
                isPalindrom = false;
            }
        }
    }
    if(isPalindrom == true){
    alert(n +" "+ "is the palindrom ");
    } 
    else{
        alert(n +" "+ "is not the palindrom ");

    }
}

let number =   prompt("enter the value to check it is palindrom or not");


checkForPalindro(number);

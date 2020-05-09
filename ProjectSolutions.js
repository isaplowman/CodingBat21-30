/*
* Isabela Plowman
* JavaScript Problems 21-30
* May 8th, 2020
* */


//Problem 21
function countEvens(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 == 0)
            count++;
    }
    return count;
}


//problem 22
function countHi(str) {
    var count =0
    var len = str.length;
    if (len ==1 && str.charAt(0) == 'h')
    count = 0;

else
    {
        for(var i = 0;i<len;i++) {
        if ( (str.charAt(i) == 'h') && (str.charAt(i+1) == 'i') )
        count+=1;

    }
    }

    return count;
}



//problem 23
function no14(arr){
    var noOne = true
    var noFour = true;
    for(var i = 0; i < arr.length && (noOne || noFour); i++)
    {
        if(arr[i] == 1)
            noOne = false;
        else if(arr[i] == 4)
            noFour = false;
    }
    return (noOne || noFour);
}


//problem 24
function either24(arr){
    var no2 = 1
    var no4 = 1;
    for(var i = 0; i < arr.length - 1 && (no2 + no4 != 0); i++)
    {
        if(arr[i] == 2 && arr[i+1] == 2)
            no2 = 0;
        else if(arr[i] == 4 && arr[i+1] == 4)
            no4 = 0;
    }
    return ((no2 ^ no4) == 1);
}



//problem 25
function makeChocolate(small, big, goal) {
    if((small + big * 5) < goal)
    {
        return -1;
    }
    else if((big * 5) > goal)
    {
        return goal % 5;
    }
    else
    {
        return goal - big * 5;
    }


}

//problem 26
function luckySum(a, b, c) {
    if(a == 13){
        return 0;
    }
    if(b == 13){
        return a;
    }
    if(c == 13){
        return a + b;
    }
    return a + b + c;
}




//problem 27
function maxBlock(str){
    var count = 1;
    var max = 0;
    var len = str.length;
    if (len == 0){
        return 0;
    }

    for(var i = 0; i < len ; i++) {
        if (i + 2 <= len && str.substring(i, i + 1) == (str.substring(i + 1, i + 2))) {
            count++;
        } else {
            if (count >= max) {
                max = count;
            }
            count = 1;
        }
    }
    return max;
}

//problem 28
function linearIn(outer, inner) {
    var i = 0;
    var j = 0;

    while(i < inner.length && j < outer.length) {
        if(inner[i] > outer[j]) {
            j++;
        } else if(inner[i] < outer[j]) {
            return false;
        } else {
            i++;
        }
    }

    if(i != inner.length)
        return false;

    return true;
}



//problem 29
function countTriple(str) {
    var count = 0;

    for(var i = 0; i <= str.length - 3; i++) {
        if(str.charAt(i) == str.charAt(i+1) &&
            str.charAt(i) == str.charAt(i+2))
            count++;
    }

    return count;
}


//problem 30
function sameEnds(str){
    var len = str.length;
    var finish = "";
    var tmp = "";

    for(var i = 0; i < len; i++) {
        tmp += str.charAt(i);
        var tmplen = tmp.length;
        if (i < len / 2 && tmp == (str.substring(len-tmplen,len)))
        finish = tmp;
    }

    return finish;

}

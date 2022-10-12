var result = document.getElementById('final');
var str = "";
var one = ()=>{
    str = str + 1;
    console.log(str);
    result.value=str;
}

var two = ()=>{
    str = str + 2;
    console.log(str);
    result.value=str;
}

var three = ()=>{
    str = str + 3;
    console.log(str);
    result.value=str;
}

var four = ()=>{
    str = str + 4;
    console.log(str);
    result.value=str;
}

var five = ()=>{
    str = str + 5;
    console.log(str);
    result.value=str;
}

var six = ()=>{
    str = str + 6;
    console.log(str);
    result.value=str;
}

var seven = ()=>{
    str = str + 7;
    console.log(str);
    result.value=str;
}

var eight = ()=>{
    str = str + 8;
    console.log(str);
    result.value=str;
}

var nine = ()=>{
    str = str + 9;
    console.log(str);
    result.value=str;
}

var zero = () => {
    str = str+0;
    console.log(str);
    result.value=str;
}

var plus = ()=>{
    str = str + '+';
    console.log(str);
    result.value=str;
}
var minus = ()=>{
    str = str + '-';
    console.log(str);
    result.value=str;
}
var div = ()=>{
    str = str + '/';
    console.log(str);
    result.value=str;
}
var mul = ()=>{
    str = str + '*';
    console.log(str);
    result.value=str;
}

var calci = ()=>{
    console.log(str);
    result.value=eval(str);
    str=eval(str);
}

var clear = ()=>{
    result.value="";
    str="";
}
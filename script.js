const PI=3.14;
let getArea=(radius)=>{
    let s = radius * radius * PI;
    let pElement=document.getElementById('result');
    pElement.innerHTML="Area of Circle is: <b>" + s + "</b>";
}


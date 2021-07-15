tint_color="";
var filters=["threshold" ,"gray", "opaque", "invert", "dilate",  "erode"];
var filterlo = filters[0];
function preload(){
    
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(400,550);
    camera=createCapture(VIDEO);
    camera.hide();

    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IUki97ASJ/model.json',modelLoaded);
}
function p5filter(){

    var filterno=  Math.random();
    filterno=Math.floor(filterno*(filters.length));

    filterlo=filters[filterno];
    console.log('filterlo', filterlo)
}
function modelLoaded(){
    alert("THE AI MODEL HAS LOADED! KYUN BATHE HO KHALI BAJAO TALI!");
}
function draw(){
    image(camera,0,0,500,400);
    filter(filterlo);
    classifier.classify(camera,gotResult);
}
function gotResult(error,results){
    if(error){
        alert("AN ERROR OCCOURED! WE ARE NOT SORRY! "+error)
    }else{
        console.log(results);
        document.getElementById("member").innerHTML=results[0].label;
        confidence=results[0].confidence.toFixed(2);
        confidence=confidence*100;
        document.getElementById("accuracy").innerHTML=confidence+"%";

    }
}
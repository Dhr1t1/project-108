function startClassifcation(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rhtrB29IT/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        randomNumber_r=Math.floor(Math.random()*255)+1;
        randomNumber_g=Math.floor(Math.random()*255)+1;
        randomNumber_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("result_many").innerHTML="Accurucy- "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+randomNumber_r+","+randomNumber_g+","+randomNumber_b+")";
        document.getElementById("result_many").style.color="rgb("+randomNumber_r+","+randomNumber_g+","+randomNumber_b+")";

        img=document.getElementById("th (1).jpg");

        if (results[0].label=="Dog"){
            img.src='dog.jpg';
        }
        else if (results[0].label=='Cow'){
            img.src='cow.jpg'
        }
        else if (results[0].label=="Cat"){
            img.src='cat.jpg'
        }
        else if (results[0].label=="Lion"){
            img.src='lion.jpg'
        }
    }
}
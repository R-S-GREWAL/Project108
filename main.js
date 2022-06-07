function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', 
modelReady);
}
function modelReady()
{ 
    classifier.classify( gotResults);
}
function gotResults(error, results) 
{ 
    if (error) 
    { 
        console.error(error); 
    } 
    else 
    { 
        console.log(results); 
        random_number_r = Math.floor(Math.random() * 255) + 1; 
        random_number_g = Math.floor(Math.random() * 255) + 1; 
        random_number_b = Math.floor(Math.random() * 255) + 1; 
        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label; 
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %"; 
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 
        img = document.getElementById('background') 
        img1 = document.getElementById('lion') 
        img2 = document.getElementById('dog')
        img3 = document.getElementById('cat') 

        
if (results[0].label == "Background Noise") 
{ 
    img.src = 'backgroundgif.webp'; 
    img1.src = 'lion.png'; 
    img2.src = 'dog.png'; 
    img3.src = 'cat.png'; 
} 
else if (results[0].label == "Bell") 
{ 
    img.src = 'background.jpg'; 
    img1.src = 'lion.gif'; 
    img2.src = 'dog.png'; 
    img3.src = 'cat.png'; 
} 
else if (results[0].label == "Snapping") 
{ 
    img.src = 'background.jpg'; 
    img1.src = 'lion.png'; 
    img2.src = 'dog.gif'; 
    img3.src = 'cat.png'; 
}
else
{
    img.src = 'background.jpg'; 
    img1.src = 'lion.png'; 
    img2.src = 'dog.png'; 
    img3.src = 'cat.gif'; 
} 
} 
}

  
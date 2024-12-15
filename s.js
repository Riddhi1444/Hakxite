function calculateBMI() {
    // Get input values
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    // Check if inputs are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    // Convert height to meters
    height = height / 100; // Convert height from cm to meters

    // Calculate BMI
    var bmi = weight / (height * height);

    var resultDiv = document.getElementById("result");

    if(bmi<=18.5) {
        resultDiv.innerHTML = "OOPS!! You are underweight";
    } else if(bmi>18.5 && bmi<=25) {
        resultDiv.innerHTML = "Amazing!! You are all fit";
    } else if(bmi>25 && bmi<=30) {
        resultDiv.innerHTML = "OOPS!! You are Overweight";
    } else if(bmi>30 && bmi<=35) {
        resultDiv.innerHTML = "OOPS!! You are obese (class:1)";
    } else if(bmi>35 && bmi<=40) {
        resultDiv.innerHTML = "OOPS!! You are obese (class:2)";
    } else if(bmi>40) {
        resultDiv.innerHTML = "OOPS!! You are obese (class:3)";
    }

    // Display the result
    resultDiv.innerHTML += "<br>Your BMI : " + bmi.toFixed(2);
}

function showExercise()
{
    // Select the radio buttons by their name
    var radio1 = document.querySelectorAll('input[name="emc"]');

    // Iterate through the radio buttons to find the checked one
    var selectedValue1 = "";
    radio1.forEach(function(radio) {
        if (radio.checked) {
            selectedValue1 = radio.value;
        }
    });

    // // Output the selected value
    // console.log("Selected gender:", selectedValue1);


     // Select the radio buttons by their name
     var radio2 = document.querySelectorAll('input[name="pmc"]');

     // Iterate through the radio buttons to find the checked one
     var selectedValue2 = "";
     radio2.forEach(function(radio) {
         if (radio.checked) {
             selectedValue2 = radio.value;
         }
     });
 
    //  // Output the selected value
    //  console.log("Selected gender:", selectedValue2);
     
}

function displayExercise()
{
    if(selectedValue1=="Heart Disease" && selectedValue2=="Heart Attack")
    {
        document.write('<h2>Exercises most<b>SUITABLE</b>for you');
        document.write('<h4>Walking</h4><br><br><img src="images/walking.jpeg"><br><br><br><br><h4>Cycling</h4><br><br><img src="images/cycling.jpeg"><br><br><br><br><h4>Swimming</h4><br><br><img src="images/swimming.jpeg"><br><br><br><br><h4>Tai Chi</h4><br><br><img src="images/Taichi.jpeg"><br><br><br><br><h4>Yoga</h4><br><br><img src="images/yoga.jpeg"><br><br><br><br>');
        document.write('<h2>Exercises to <b>AVOID</b>');
        document.write('<h4>High-Intensity Training(HIIT)</h4><br><br><img src="hiit/walking.jpeg"><br><br><br><br><h4>Heavy Weightlifting</h4><br><br><img src="heavy/cycling.jpeg"><br><br><br><br><h4>Swimming</h4><br><br><img src="images/swimming.jpeg"><br><br><br><br><h4>Tai Chi</h4><br><br><img src="images/Taichi.jpeg"><br><br><br><br><h4>Yoga</h4><br><br><img src="images/yoga.jpeg"><br><br><br><br>');

    }
}

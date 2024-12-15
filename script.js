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


var selectedValue1 = "";
var selectedValue2 = "";
function showExercise()
{
    // Select the radio buttons by their name
    var radio1 = document.querySelectorAll('input[name="emc"]');

    // Iterate through the radio buttons to find the checked one
    
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
    // document.write("helo");

    if(selectedValue1=="Heart Disease" && selectedValue2=="Heart Attack")
    {
        document.write("helo");
    }
}
//CALCULATE BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//MY SOLUTION
function bmi(weight, height){
    let b = weight/(height*height)
    if(b <= 18.5){
        return 'Underweight'
    }else if(b <= 25){
        return 'Normal'
    }else if(b <= 30){
        return 'Overweight'
    }else{
        return 'Obese'
    }
}

//OTHER CLEVER SOLUTION
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";
#CALCULATE BMI
# Write function bmi that calculates body mass index (bmi = weight / height2).

# if bmi <= 18.5 return "Underweight"

# if bmi <= 25.0 return "Normal"

# if bmi <= 30.0 return "Overweight"

# if bmi > 30 return "Obese"

#MY SOLUTION
def bmi(weight, height):
    b = weight/(height*height)
    if b <= 18.5:
        return 'Underweight'
    elif b <= 25:
        return 'Normal'
    elif b <= 30:
        return 'Overweight'
    else:
        return 'Obese'

#OTHER CLEVER SOLUTION
def bmi(weight, height):
    b = weight / height ** 2
    return ['Underweight', 'Normal', 'Overweight', 'Obese'][(b > 30) + (b > 25) + (b > 18.5)]
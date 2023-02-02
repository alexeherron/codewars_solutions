#SUPER DUPER EASY
# Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

#MY SOLUTION
def easy(value):
    return 'Error' if type(value) == str else (value*50 + 6)

#OTHER CLEVER SOLUTION
def problem(a):
    try:
        return a * 50 + 6
    except TypeError:
        return "Error"
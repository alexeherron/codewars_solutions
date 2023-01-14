#SIMPLE MULTIPLICATION
# This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
#MY SOLUTION
def simple_multiplication(number):
  if number % 2 == 0:
    return number * 8
  else:
    return number * 9

#OTHER CLEVER SOLUTION
def simple_multiplication(n) :
    return n * (8 + n%2)
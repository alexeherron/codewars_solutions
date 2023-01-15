#EVEN OR ODD
# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

#MY SOLUTION
def even_or_odd (number):
  if number % 2 == 0:
    return 'Even'
  else:
    return 'Odd'

#OTHER CLEVER SOLUTION
def even_or_odd(number):
	return 'Odd' if number % 2 else 'Even'
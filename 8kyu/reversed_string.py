# REVERSED STRINGS
# Complete the solution so that it reverses the string passed into it.

#  'world'  =>  'dlrow'
#  'word'   =>  'drow'

# MY SOLUTION
def solution(string):
    result = list(string)
    result.reverse()
    return ('').join(result)

#OTHER CLEVER SOLUTIONS
def solution(str):
  return str[::-1]

def solution(string):
    return ''.join(i for i in reversed(string))
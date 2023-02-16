#SIMPLE STRING CHARACTERS
# In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

# Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
# --the order is: uppercase letters, lowercase, numbers and special characters.

# More examples in the test cases.

# Good luck!

#MY SOLUTION
def solve(s):
    import string
    upper = 0
    lower = 0
    num = 0
    special = 0
    for char in s:
        if char in string.ascii_uppercase:
            upper += 1
        elif char in string.ascii_lowercase:
            lower += 1
        elif char in string.digits:
            num += 1
        else:
            special += 1
    return [upper, lower, num, special]

#OTHER CLEVER SOLUTIONS
def solve(s):
  uc, lc, num, sp = 0, 0, 0, 0
  for ch in s:
    if ch.isupper(): uc += 1
    elif ch.islower(): lc += 1
    elif ch.isdigit(): num += 1
    else: sp += 1
  return [uc, lc, num, sp]

#
import re
def solve(s):
    return [len(re.findall(i,s)) for i in ('[A-Z]','[a-z]','\d','[^a-zA-Z0-9]')]
#SUM THE STRINGS
# Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

# Example: (Input1, Input2 -->Output)

# "4",  "5" --> "9"
# "34", "5" --> "39"
# "", "" --> "0"
# "2", "" --> "2"
# "-5", "3" --> "-2"

# Notes:

#     If either input is an empty string, consider it as zero.

#     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

#MY SOLUTION
def sum_str(a,b):
    if a == '':
        a = 0
    if b == '':
        b = 0
    result = str(int(a) + int(b))
    return result

#OTHER CLEVER SOLUTION
def sum_str(a, b):
    return str(int(a or 0) + int(b or 0))
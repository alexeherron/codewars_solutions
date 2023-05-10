# RETURNING STRINGS
# Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

# [Make sure you type the exact thing I wrote or the program may not execute properly]

# MY SOLUTION
def greet(name):
    return f'Hello, {name} how are you doing today?'

# OTHER CLEVER SOLUTION
def greet(name):
    return "Hello, {} how are you doing today?".format(name)
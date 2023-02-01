#SIMPLE FUN #52: PAIR OF SHOES
# Task

# Yesterday you found some shoes in your room. Each shoe is described by two values:

# type indicates if it's a left or a right shoe;
# size is the size of the shoe.

# Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.
# Example

# For:

# shoes = [[0, 21], 
#          [1, 23], 
#          [1, 21], 
#          [0, 23]]

# the output should be true;

# For:

# shoes = [[0, 21], 
#          [1, 23], 
#          [1, 21], 
#          [1, 23]]

# the output should be false.
# Input/Output

#     [input] 2D integer array shoes
#     Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

#     Constraints: 2 ≤ shoes.length ≤ 50,  1 ≤ shoes[i][1] ≤ 100.

#     [output] a boolean value

#     true if it is possible to pair the shoes, false otherwise.

#MY SOLUTION
def compare_it(arr):
    arr.sort()
    return ''.join(arr)
def pair_of_shoes(shoes):
    zeroes = []
    ones = []
    for shoe in shoes:
        if shoe[0] == 0:
            zeroes.append(str(shoe[1]))
        else:
            ones.append(str(shoe[1]))
    if compare_it(zeroes) == compare_it(ones):
        return True
    else:
        return False

#OTHER CLEVER SOLUTION
def pair_of_shoes(a):
    return sorted(s for lr, s in a if lr == 1) == sorted(s for lr, s in a if lr == 0)
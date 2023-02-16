#MOVING ZEROES TO THE END
# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

#MY SOLUTION
def move_zeros(lst):
    not_zero = list(filter(lambda x: x!=0, lst))
    zero = list(filter(lambda x: x==0, lst))
    not_zero = not_zero + zero
    return not_zero

#OTHER CLEVER SOLUTION
def move_zeros(arr):
    l = [i for i in arr if isinstance(i, bool) or i!=0]
    return l+[0]*(len(arr)-len(l))
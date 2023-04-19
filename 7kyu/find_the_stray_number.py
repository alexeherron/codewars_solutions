# FIND THE STRAY NUMBER
# You are given an odd-length array of integers, in which all of them are the same, except for one single number.

# Complete the method which accepts such an array, and returns that single different number.

# The input array will always be valid! (odd-length >= 3)
# Examples

# [1, 1, 2] ==> 2
# [17, 17, 3, 17, 17, 17, 17] ==> 3

# MY SOLUTION
def stray(arr):
    mini = min(arr)
    maxi = max(arr)
    mini_list = []
    maxi_list = []
    for i in range(3):
        if arr[i] == mini:
            mini_list.append(arr[i])
        else:
            maxi_list.append(arr[i])
    if len(mini_list) > 1:
        return maxi
    else:
        return mini
    
# OTHER CLEVER SOLUTION
def stray(arr):
    for x in arr:
        if arr.count(x) == 1:
            return x
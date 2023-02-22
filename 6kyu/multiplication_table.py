#MULTIPLICATION TABLE
# Your task, is to create N×N multiplication table, of size provided in parameter.

# For example, when given size is 3:

# 1 2 3
# 2 4 6
# 3 6 9

# For the given example, the return value should be:

# [[1,2,3],[2,4,6],[3,6,9]]

#MY SOLUTION
def multiplication_table(size):
    result = []
    for i in range(size):
        internal = []
        for j in range(size):
            num = (i + 1)*(j + 1)
            internal.append(num)
        result.append(internal)
    return result

#OTHER CLEVER SOLUTION
def multiplicationTable(size):
    return [[j*i for j in range(1, size+1)] for i in range(1, size+1)]
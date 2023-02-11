#COUNT OF POS SUM OF NEG
# Given an array of integers.

# Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

# If the input is an empty array or is null, return an empty array.
# Example

# For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

#MY SOLUTION
def sum_count(array):
  if array == None or len(array) == 0:
    return []
  pos = []
  neg = 0
  for item in array:
    if item < 0:
      neg += item
    if item > 0:
      pos.append(item)

  return [len(pos),neg]

#OTHER CLEVER SOLUTION
def count_positives_sum_negatives(arr):
    if not arr: return []
    pos = 0
    neg = 0
    for x in arr:
      if x > 0:
          pos += 1
      if x < 0:
          neg += x
    return [pos, neg]
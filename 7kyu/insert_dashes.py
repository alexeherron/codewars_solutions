# INSERT DASHES
# Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

# Note that the number will always be non-negative (>= 0).

# MY SOLUTION
def insert_dash(num):
  nums = [int(i) for i in str(num)]
  for i in range(len(nums)):
    if nums[i]%2!=0 and i!=0 and nums[i-1]%2!=0:
      nums[i] = nums[i]*-1
  nums = [str(i) for i in nums]
  return ''.join(nums)

#OTHER CLEVER SOLUTION
def insert_dash(num):
  
  digits = [d for d in str(num)]
  
  for i in range(len(digits)-1):
    if int(digits[i])%2 and int(digits[i+1])%2:
      digits[i] = digits[i] + '-'
  
  return ''.join(digits)
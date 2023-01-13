#HUMAN READABLE TIME
# Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

#     HH = hours, padded to 2 digits, range: 00 - 99
#     MM = minutes, padded to 2 digits, range: 00 - 59
#     SS = seconds, padded to 2 digits, range: 00 - 59

# The maximum time never exceeds 359999 (99:59:59)

# You can find some examples in the test fixtures.

#MY SOLUTION
import math
def make_readable(seconds):
  def format(var):
    if int(var) < 10:
      return '0' + str(var)
    else:
      return var
  HH = math.floor(seconds/3600)
  MM = math.floor((seconds - HH*3600)/60)
  SS = math.floor((seconds - (HH*3600) - (MM*60)))
  #return SS
  return f"{format(HH)}:{format(MM)}:{format(SS)}"

#OTHER CLEVER SOLUTION
def make_readable(s):
    return '{:02}:{:02}:{:02}'.format(s / 3600, s / 60 % 60, s % 60)
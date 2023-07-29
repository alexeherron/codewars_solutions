# FIND MIN AND MAX
# Implement a function that returns the minimal and the maximal value of a list (in this order).

# MY SOLUTION
def get_min_max(seq): 
    return (min(seq), max(seq))

# OTHER CLEVER SOLUTION
get_min_max = lambda seq: (min(seq), max(seq))
# FAKE BINARY
# Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

# Note: input will never be an empty string

# MY SOLUTION
def fake_bin(x):
    result = []
    for char in x:
        if int(char) < 5:
            result.append('0')
        else:
            result.append('1')
    return ''.join(result)

# OTHER CLEVER SOLUTION
def fake_bin(x):
    return ''.join('0' if c < '5' else '1' for c in x)
# BREAK CAMEL CASE
# Complete the solution so that the function will break up camel casing, using a space between words.
# Example

# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""

# MY SOLUTION
def solution(s):
    string_list = list(s)
    result = []
    for i in range(len(string_list)):
        if string_list[i] == string_list[i].upper():
            result.append(f" {string_list[i]}")
        else:
            result.append(string_list[i])
    return ''.join(result)

# OTHER CLEVER SOLUTION
def solution(s):
    return ''.join(' ' + c if c.isupper() else c for c in s)
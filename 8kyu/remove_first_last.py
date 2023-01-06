# It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

#MY SOLUTION
def first_last(string):
    front = string[1:]
    back = front[0:len(front)-1]
    return back

#OTHER CLEVER SOLUTION
def remove_char(s):
    return s[1 : -1]
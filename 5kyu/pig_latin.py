#PIG LATIN
# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
# Examples

# pig_it('Pig latin is cool') # igPay atinlay siay oolcay
# pig_it('Hello world !')     # elloHay orldway !

#MY SOLUTION
import string
def pig_it(text):
    sprinkles = ''
    for char in text:
        if char not in string.ascii_letters and char not in string.whitespace:
          sprinkles += char
          text = text[0:-1]
    if text[-1] == ' ':
        sprinkles = ' ' + sprinkles
    text_array = text.split(' ')
    text_array = filter(bool, text_array)
    result = []
    for item in text_array:
        result.append(item[1:] + item[0] + 'ay')
    return (' ').join(result) + sprinkles

#OTHER CLEVER SOLUTION
def pig_it(text):
    lst = text.split()
    return ' '.join( [word[1:] + word[:1] + 'ay' if word.isalpha() else word for word in lst])
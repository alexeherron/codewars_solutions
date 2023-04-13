# EXCLAMATION MARKS SERIES #7: REMOVE WORDS FROM THE SENTENCE IF IT CONTAINS ONE EXCLAMATION MARK
# Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
# Examples

# remove("Hi!") === ""
# remove("Hi! Hi!") === ""
# remove("Hi! Hi! Hi!") === ""
# remove("Hi Hi! Hi!") === "Hi"
# remove("Hi! !Hi Hi!") === ""
# remove("Hi! Hi!! Hi!") === "Hi!!"
# remove("Hi! !Hi! Hi!") === "!Hi!"

# MY SOLUTION
def remove(s):
    words = s.split()
    result = []
    for word in words:
        if len(word.split('!')) != 2:
            result.append(word)
    return ' '.join(result)

# OTHER CLEVER SOLUTION
def remove(s):
    return ' '.join(w for w in s.split(' ') if w.count('!') != 1)
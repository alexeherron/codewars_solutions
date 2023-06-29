# COUNT CONSONANTS
# Complete the function that takes a string of English-language text and returns the number of consonants in the string.

# Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

# MY SOLUTION
def consonant_count(s):
    count = 0
    for letter in s:
        if letter in ('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'):
            count += 1
    return count

# OTHER CLEVER SOLUTION
def consonant_count(str):
    return sum(1 for c in str if c.isalpha() and c.lower() not in "aeiou")
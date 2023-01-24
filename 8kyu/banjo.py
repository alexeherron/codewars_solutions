#ARE YOU PLAYING BANJO?
# Create a function which answers the question "Are you playing banjo?".
# If your name starts with the letter "R" or lower case "r", you are playing banjo!

# The function takes a name as its only argument, and returns one of the following strings:

# name + " plays banjo" 
# name + " does not play banjo"

# Names given are always valid strings.

#MY SOLUTION
def are_you_playing_banjo(name):
    return f"{name} plays banjo" if name.lower()[0] == 'r' else f"{name} does not play banjo"

#OTHER CLEVER SOLUTION
def areYouPlayingBanjo(name):
    return name + (' plays' if name[0].lower() == 'r' else ' does not play') + " banjo"
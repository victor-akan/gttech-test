# Third solution

# create a function that takes in a string as an input and repeats that string in 3 places
# e.g. boy becomes boyboy.
# note that you are to do a string multiplication


def repeat_string():

    boy = [2,2,2]

    repeat = ['boy' * i for i in boy]

    for line in repeat:
        print(line)
    return

repeat_string()

# take in # & determine if printed backward, is the same
from operator import truediv


def isPalindrome(num):
    # first, will need to split each number into seperate values (has to be a string to do so)
    num_array = list(str(num))
    print(num_array)
    # reverse order & rejoin
    array_rev = list(str(num))
    array_rev.reverse()
    print(array_rev)
    if num_array == array_rev:
        return True
    else:
        return False


print(isPalindrome(7427))

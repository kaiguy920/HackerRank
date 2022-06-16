# given different strings of words, determine how many characters in common they have
def longestCommonPrefix(strs):
    # declare a variable as the first string, for comparison
    pre = strs[0]
    # loop through the strs to compare with the first string
    for i in strs:
        while not i.startswith(pre):
            # once we reach the letter that doesn't match pre, we will declare pre one index back
            pre = pre[:-1]

    return pre


print(longestCommonPrefix(["flower", "flow", "flight"]))

# given a string of types of brackets, determine whether they are valid (closed)
def isValid(s):
    while "()" in s or "{}" in s or '[]' in s:
        s = s.replace("()", "").replace('{}', "").replace('[]', "")
        # if s is is now empty bc it's been replaced, it will return true

    return s == ''


print(isValid("(){)[]"))


def removeElement(nums, val) -> int:

    new_arr = []
    for i in range(0, len(nums), +1):
        if nums[i] != val:
            new_arr.append(nums[i])

    print(new_arr)


removeElement([3, 2, 2, 3], 3)

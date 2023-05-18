
def romanToInt(s: str):
    s_array = list(s.upper())
    sum = 0
    print(s_array)
    for i in s_array:
        if i == "I":
            sum += 1
        if i == "V":
            sum += 5
        if i == "X":
            sum += 10
        if i == "L":
            sum += 50
        if i == "C":
            sum += 100
        if i == "D":
            sum += 500
        if i == "M":
            sum += 1000
    return sum


print(romanToInt("div"))

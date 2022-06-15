
def twoSum(nums, target):
    index = []
    for i in range(0, len(nums), +1):
        for j in range(1, len(nums), +1):
            if nums[i] + nums[j] == target:
                index.append(nums[i])
                index.append(nums[j])

                return index


print(twoSum([3, 2, 4], 6))

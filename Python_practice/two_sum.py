
def twoSum(nums, target):
    index = []
    for i in range(0, len(nums), +1):
        for j in range(1, len(nums), +1):
            if nums[i] + nums[j] == target:
                index.append(nums[i])
                index.append(nums[j])

                return index


print(twoSum([3, 2, 4], 6))

# ==================================================
#             MERGE TWO SORTED LISTS
# ==================================================


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def mergeTwoLists(self, l1, l2):
        dummy = ListNode(0)
        cur = dummy
        while l1 and l2:
            if l1.val <= l2.val:
                cur.next = l1
                l1 = l1.next
            else:
                cur.next = l2
                l2 = l2.next
            cur = cur.next
        cur.next = l1 or l2

        return dummy.next

    print(mergeTwoLists([1, 2, 4], [1, 3, 4]))

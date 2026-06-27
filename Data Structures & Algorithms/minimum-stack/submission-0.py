class MinStack:

    def __init__(self):
        self.st = []

    def push(self, x: int) -> None:
        newMin = x if not self.st else min(x, self.st[-1][1])
        self.st.append((x, newMin))
        return

    def pop(self) -> None:
        if self.st:
            self.st.pop()
        return 

    def top(self) -> int:
        return -1 if not self.st else self.st[-1][0]

    def getMin(self) -> int:
        return -1 if not self.st else self.st[-1][1]

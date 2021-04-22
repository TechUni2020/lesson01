a = []

for i in range(1,10):
    for j in range(1,10):
        a.append(i*j)

n = 0
s = 9
for i in range(9):
    print(*a[n:n+s:1])
    n +=s

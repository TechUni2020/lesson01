a = list(map(int,input().split()))
b = []
n = 0
s = a[1]
for i in range(a[0]):
    for j in range(a[1]):
        if i%2 ==0 and j%2 == 0:
            b.append('*')
        elif i%2 ==0 and j%2 == 1:
            b.append('-')
        elif i%2 == 1 and j%2 ==0:
            b.append('-')
        elif i%2 == 1 and j%2 ==1:
            b.append('*')


for i in range(a[0]):
    print(*b[n:n+s:1])
    n +=s

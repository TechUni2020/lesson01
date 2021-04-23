a = int(input())
b = []
for i in range(1,a+1):
    for j in range(a-i):
        b.append(' ')
    for k in range(i*2-1):
        b.append('*')
        
n = 0
for i in range(a):
    print(*b[n:n+a:1])
    n += a
    a+= 1

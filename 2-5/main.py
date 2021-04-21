a = int(input())
b = []
c = [100,10,1]
for i in range(len(c)):
    b.append(a//c[i])
    a = a%c[i]

print("100円玉{}枚, 10円玉{}, 1円玉{}枚".format(b[0],b[1],b[2]))

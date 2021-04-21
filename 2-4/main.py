#pythonにはswitch構文がないので、defを使って実装。
def switch(a):
    if 2<= a <=4:
        print("春")
    elif 5<= a <=7:
        print("夏")
    elif 8<= a <=10:
        print("秋")
    else:
        print("冬")

if __name__ == '__main__':
    a = int(input())
    switch(a)

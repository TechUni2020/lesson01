#-*- coding: utf-8 -*-
 
import sys

x = int(sys.argv[1])

hundred = str(x/100)
ten = str(x%100/10)
one = str(x%100%10)

print("100円玉"+hundred+"枚,10円玉"+ten+"枚,1円玉"+one+"枚")
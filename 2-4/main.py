#-*- coding: utf-8 -*-
 
import sys

x = int(sys.argv[1])

if 2 <= x <= 4:
  print("春")

elif 5 <= x <= 7:
  print("夏")

elif 8 <= x <= 10:
  print("秋")

elif 1 == x and 11 <= x:
  print("冬")
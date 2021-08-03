step = ARGV[0].to_i

# 「*」と「 」の数を受けて、その行を出力する関数
def print_pyramid_row(asterisk, space)
  for i in 1..space
    printf(" ")
  end
  for j in 1..asterisk
    printf("*")
  end
  puts ""
end

row_count = 1

#出力
for i in 1..step
  print_pyramid_row(2 * row_count - 1, step - row_count)
  row_count += 1
end


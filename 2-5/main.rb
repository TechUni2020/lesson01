total = ARGV[0].to_i

hundred_coin = total / 100
total -= hundred_coin * 100

ten_coin = total / 10
total -= ten_coin * 10

one_coin = total

puts "100円玉#{hundred_coin}枚, 10円玉#{ten_coin}枚, 1円玉#{one_coin}枚"



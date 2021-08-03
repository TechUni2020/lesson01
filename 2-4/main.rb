a = ARGV[0].to_i

case a
when 1 
  puts "冬"
when 2..4
  puts "春"
when 5..7
  puts "夏"
when 8..10
  puts "秋"
when 11..12
  puts "冬"
else
  puts "1~12までの値を入力してください"
end
  
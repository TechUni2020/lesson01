seasons = ["春","夏","秋","冬"]
month = ARGV[0].to_i

case month
when 2..4
  season = seasons[0]
when 5..7
  season = seasons[1]
when 8..10
  season = seasons[2]
when 1,11..12
  season = seasons[3]
else
  season = "1~12の数を入力してください。"
end

puts season
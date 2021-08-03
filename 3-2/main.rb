height = ARGV[0].to_i
width = ARGV[1].to_i

is_odd = true

for i in 1..height
  if i % 2 == 1
    is_odd = true
  else
    is_odd = false
  end
  
  for j in 1..width
    if is_odd
      printf("*")
      is_odd = false
    else
      printf("-")
      is_odd = true
    end
  end
  puts ""
end

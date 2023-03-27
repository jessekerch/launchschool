def next_bigger_num(int)
  answer = -1
  perms = []
  int.digits.permutation(int.digits.size) { |p| perms << p.join.to_i }
  perms.sort.each { |num| return num if num > int }
  answer
end

p next_bigger_num(9) == -1
p next_bigger_num(12) == 21
p next_bigger_num(513) == 531
p next_bigger_num(2017) == 2071
p next_bigger_num(111) == -1
p next_bigger_num(531) == -1
p next_bigger_num(123456789) == 123456798
p next_bigger_num(122) == 212
p next_bigger_num(218765) == 251678
p next_bigger_num(534976) == 536479
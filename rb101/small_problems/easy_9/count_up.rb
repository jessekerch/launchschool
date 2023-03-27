# LS Solution:
# (1..number).to_a
#
# Good to remember that I can convert a range into an array!


def sequence(end_num)
  array = []
  1.upto(end_num) do |num|
    array << num
  end
  array
end

p sequence(5) #== [1, 2, 3, 4, 5]
p sequence(3) #== [1, 2, 3]
p sequence(1) #== [1]

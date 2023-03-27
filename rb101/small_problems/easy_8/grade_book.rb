# 90 <= score <= 100 	'A'
# 80 <= score < 90 	'B'
# 70 <= score < 80 	'C'
# 60 <= score < 70 	'D'
# 0 <= score < 60 	'F'

def get_grade(score_1, score_2, score_3)
  average = (score_1 + score_2 + score_3) / 3

  case average
  when (90..) then 'A'
  when 80...90 then 'B'
  when 70...80 then 'C'
  when 60...70 then 'D'
  else 'F'
  end

end

p get_grade(95, 90, 93) == "A"
p get_grade(50, 50, 95) == "D"

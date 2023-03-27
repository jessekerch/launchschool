def after_midnight(time)
  minutes = (time[0, 2].to_i * 60) + time[3, 2].to_i
  minutes % 1440
end

def before_midnight(time)
  minutes = (time[0, 2].to_i * 60) + time[3, 2].to_i
  (1440 - minutes) % 1440
end

p after_midnight('00:00') == 0
p before_midnight('00:00') == 0
p after_midnight('12:34') == 754
p before_midnight('12:34') == 686
p after_midnight('24:00') == 0
p before_midnight('24:00') == 0
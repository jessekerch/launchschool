# Jesse Kercheval
# May 18, 2022
# RB100 Ruby Basics exercises

def name(array)
  array.sample
end

def activity(array)
  array.sample
end

def sentence(arg1, arg2)
  arg1 + " is " + arg2 + "."
end  

names = ['Dave', 'Sally', 'George', 'Jessica']
activities = ['walking', 'running', 'cycling']

10.times { puts sentence(name(names), activity(activities)) }


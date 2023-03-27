def foo(param = "no")
  puts "output from inside the foo method"
  "yes"
end

def bar(param = "no")
  p param
  param == "no" ? "yes" : "no"
end

p bar(foo)
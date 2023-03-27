# Jesse Kercheval
# May 18, 2022
# RB100 Ruby Basics exercises

# good to know that the return of an if statement can be assigned to a variable!
# I did it with a method, which worked too

status = ['awake', 'tired'].sample

alert = if status == 'awake'
          'Be productive!'
        else
          'Go to sleep!'
        end

puts alert
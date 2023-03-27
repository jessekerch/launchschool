NOUNS = %w(fart meal poop head diaper spider truck dog cat hat socks
           cockroach underpants donkey toilet plate nose towel stomach)
           
VERBS = %w(scratches marries attends pushes laughs tumbles rips
           smells eats examines attempts spells rubs kisses)

ADJS = %w(stinky fast gross crazy secret selfish careful wild skinny
          scary famous crabby huge slow slimy yellow blue black old
          moldy upset)

ADVS = %w(totally slowly silly happily calmly quickly magically
          poorly majestically clearly funny stupidly truly bravely)
          
File.open("madlib_text.txt") do |file|
  file.each do |line|
     puts format(line, noun:      NOUNS.sample,
                       verb:      VERBS.sample,
                       adjective: ADJS.sample,
                       adverb:    ADVS.sample)
  end
end


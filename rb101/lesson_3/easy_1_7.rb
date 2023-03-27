flintstones = { "Fred" => 0, "Wilma" => 1, "Barney" => 2, "Betty" => 3, "BamBam" => 4, "Pebbles" => 5 }
p flintstones.select { |key,_| key == "Barney"}.flatten

# LS says to use flintstones.assoc("Barney")
# which is another new method for me, so another flashcard (^_^)b

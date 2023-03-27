# Write a function that takes in a non-empty string and return its run-length
# encoding.

# From Wikipedia, "run-length encoding is a form of lossless data compression
# in which runs of data are stored as a single data value and count, rather
# than as the original run." 

# For this problem, a run of data is any sequence of consecutive, identical
# characters. So the run "AAA" would be run-length encoded as "3A".

# To make things more complicated, however, the input string can contain all
# sorts of special characters, including numbers. And since encoded data must
# be decodable, this means that we can't naively run-length-encode long runs.

# For example, then run "AAAAAAAAAAAA" (12 As) can't naively be encoded as
# "12A", since this string can be decoded as either "AAAAAAAAAAAA" or "1AA".
# Thus, long runs (runs of 10 of more characters) should be encoded in a split
# fashion; the aforementioned run should be encoded as "9A3A".

# Example:
# run_length_encode("AAAAAAAAAAAAABBCCCCDD") == "9A4A2B4C2D"


# Problem:
#   -input: string, representing the data to be compressed and stored
#   -output: string, representing the compressed data
#   -rules:
#     - input can be any characters - letters, symbols, numbers, etc
#     - output should convert any run of 2 or more repeated characters to a single character, preceeded by an integer representing how many
#     - multiple runs should be 9 or less characters, no more
#   - "AAAAAAAAAAAA" -> ?? -> "9A3A"
#   - "AAAAAAAAAAAA" -> ["AAAAAAAAAA", "AAA"] -> ["9A", "3A"] -> "9A3A"

# Data Structure:
#   - input string 
#   - output string
#   - intermediate array to hold separate strings of length <= 9

# Steps:
#   - split string into an array of strings of duplicate character groups <= 9 
#     - initialize new variable pointing to array object, array
#     - intialize array_idx variable pointing to 0, to start first array element
#     - iterate over string with loop and string index parameter
#         - intialize variable char pointing to first different character
#         - set char as the first element in the run_array array collection
#         - if char is different from current index of string
#           - add + 1 to array_idx array index to proceed 
#           - break loop, going to the next character set in string
#         - add current index of string to current array index element (started at 0)
        
#   - iterate over array, compressing any multiple runs to one number and character
#     - helper method: compress_str 
#     - input: string with one character multiple times
#     - output: one number and one character
#     - steps: # <= write this out
#   - join the array back into a single string
#   - return compressed string

  
  def run_length_encode(string)
    run_array = []
    index = 0
    string.each_char do |char|
      if run_array[index] == nil
        run_array[index] = char
      elsif run_array[index].length >= 9
        index += 1
        run_array[index] = char
      elsif run_array[index].include?(char)
        run_array[index] << char
      else
        index += 1
        run_array[index] = char
      end
    end
    # p run_array
    compress(run_array).join
  end
  
  def compress(array)
    array.map do |data|
      data = data.count(data[0]).to_s + data[0]
    end
  end

p run_length_encode("AAAAAAAAAAAAABBCCCCDD") == "9A4A2B4C2D"
p run_length_encode("AAAAAAAAAAAA") == "9A3A"
p run_length_encode("$$$$$$$$$$$$$$$...$") == "9$6$3.1$"
def sum_pairs(array, target_sum)
  array.each_with_index do |left_num, idx1|
    (array.size - 1).downto(idx1 + 1) do |idx2|
      right_num = array[idx2]
      # p [left_num, right_num]
      return [left_num, right_num] if left_num + right_num == target_sum
    end
  end
  nil    
  # valid_pairs = pairs.select { |pair, idx| pair[0] + pair[1] == target_sum }
  # p valid_pairs
  # sorted = valid_pairs.sort_by { |key, value| value }
  # p sorted.first
  
  #   num_hsh[num] = target_sum
  # p num_str
  # 1.upto(array.size - 1) do |right_idx|
  #   right_num = array[right_idx]
  #   0.upto(right_idx - 1) do |left_idx|
  #     left_num = array[left_idx]
  #     return [left_num, right_num] if left_num + right_num == target_sum
  #   end
  # end
  # nil
end

p sum_pairs([1, 4, 8, 7, 3, 15], 8) #== [1, 7] 
p sum_pairs([1, -2, 3, 0, -6, 1], -6) #== [0, -6]
p sum_pairs([20, -13, 40], -7) #== nil
p sum_pairs([1, 2, 3, 4, 1, 0], 2) #== [1, 1]
p sum_pairs([10, 5, 2, 3, 7, 5], 10) #== [3, 7]
p sum_pairs([4, -2, 3, 3, 4], 8) #== [4, 4]
p sum_pairs([0, 2, 0], 0) #== [0, 0]
p sum_pairs([5, 9, 13, -3], 10) #== [13, -3] 

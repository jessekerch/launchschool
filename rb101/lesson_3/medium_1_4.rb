def rolling_buffer1(buffer, max_buffer_size, new_element)
  buffer << new_element
  buffer.shift if buffer.size > max_buffer_size
  buffer
end

def rolling_buffer2(input_array, max_buffer_size, new_element)
  buffer = input_array + [new_element]
  buffer.shift if buffer.size > max_buffer_size
  buffer
end

buffer = [1, 2, 3, 4, 5]
p rolling_buffer1(buffer, 6, 6)
p buffer
p rolling_buffer2(buffer, 6, 6)
p buffer

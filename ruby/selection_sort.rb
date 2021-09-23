# require "pry"
def selection_sort(arr)
  sorted_arr = []

  while arr.length > 0
    min_idx = arr.index(arr.min)
    min = arr.delete_at(min_idx)
    sorted_arr.push(min)
  end
  sorted_arr
end
=begin
  ran into the issue of deleting duplicates.
  so, find min value + where it is
  delete just value at that location + add to new array
  continue until no elements left
  return new array
=end

=begin
  create new array
  while there are still values in ann
    find min val in array, remove from arr and add to new array
  end
  return new arr
=end

=begin
  1. Understand problem
  given array, return array in ascending order
=end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  puts "Expecting: [-5, -3, 0, 2, 2, 3, 4, 5]"
  print "=> "
  print selection_sort([4, -3, 2, -5, 3, 2, 5, 0])

  puts

  puts "Expecting: [-9, -3, -2, 0, 0, 0, 1, 3, 6]"
  print "=> "
  print selection_sort([-9, 0, 0, 0, -3, 1, -2, 6, 3])



  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }

  # store the current time in a variable called start time 
  start_time = Time.now
  # loop 1000 tmes:
  1000.times do 
    selection_sort([5, 9, 2])
    selection_sort([long_input])
  end
  #   execute the method using a small input, e.g. three items if input is an Array
  #   execute the method using a larger input, e.g. 100 items if input is an Array
  average_runtime = (Time.now - start_time) / 2000
  puts 
  puts "Average runtime is", average_runtime
  # average runtime = (current time - start time) / 2000
  end

  # Please add your pseudocode to this file
  # And a written explanation of your solution

=begin
Problem
Create a singly linked list whose elements contain data like numbers 1-10
Provide methods
  reverse the linked list
  convert a linked list to an array
  convert an array to a linked list

Example
SimpleLinkedList.new
list.push(1)

DATA
SimpleLinkedList class

class method: from_a

method: next

method: peek

method: size

method: empty?

method: push

method: head

method: tail?

method: to_a

Element class
constructor
datum: an Integer
next: an Element class object

method: datum

Algo
Make a SimpleLinkedList class

make class method: from_a
make a new SimpleLinkedList object
input: Array of integers, numbers
iterate through input array
push each element into list (creating new Element each time)
return SimpleLinkedList object

method: peek

method: size

method: empty?

method: push

method: pop

method: head

method: to_a

Element class
constructor
datum: an Integer
next: an Element class object, default to nil

method: datum
return data, Integer

method: next
return data of next Element, Integer

method: tail?
return true or false if this is the last element (i.e. No Next)

Code

=end

class SimpleLinkedList
  def self.from_a(array)
    list = SimpleLinkedList.new
    return list if array.nil?
    array.reverse.each do |num|
      list.push(num)
    end
    list
  end

  def to_a
    array = []
    element = @head
    while element
      array << element.datum
      element = element.next
    end
    array
  end

  def reverse
    list = SimpleLinkedList.new
    element = @head
    while element
      list.push(element.datum)
      element = element.next
    end
    list
  end

  def push(new_datum)
    next_elem = Element.new(new_datum, @head)
    @head = next_elem
  end

  def pop
    datum = @head.datum
    new_head = @head.next
    @head = new_head
    datum
  end

  attr_reader :head

  def peek
    @head.datum
  end

  def size
    size = 0
    element = @head
    while element
      size += 1
      element = element.next
    end
    size
  end

  def empty?
    @head.nil?
  end
end

class Element
  attr_accessor :datum, :next

  def initialize(datum, next_elem=nil)
    @datum = datum
    @next = next_elem
  end

  def tail?
    @next.nil?
  end
end

# frozen_string_literal: true

require 'minitest/autorun'
require_relative 'calorie_tracker'

class CalorieTrackerTest < Minitest::Test
  def setup
    @tracker = CalorieTracker.new
  end

  def test_1
    assert_equal 0, @tracker.current
  end

  def test_2
    assert_equal 2000, @tracker.goal
  end

  def test_3
    new_goal = 1900
    tracker = CalorieTracker.new(new_goal)
    assert_equal new_goal, tracker.goal
  end

  def test_4
    @tracker.add(100)
    assert_equal 100, @tracker.current
  end

  def test_5
    assert_raises(ArgumentError) { @tracker.add }
  end
end

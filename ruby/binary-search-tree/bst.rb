class NullBst
  def self.method_missing(meth, *args)
    nil
  end

  def insert(parent, node, num)
    parent.send("#{node}=", Bst.new(num))
  end
end

class Bst
  include Enumerable

  attr_accessor :left, :right, :data

  def initialize(num)
    @left = NullBst
    @right = NullBst
    @data = num
  end

  def insert(num)
    direction = num <= data ? :left : :right
    # insert_or_create(self, direction, num)
    send(direction).insert(self, direction, num)
  end

  def leaf_insert(parent, direction, num)

  end

  def each(&block)
    left.each(&block)
    # traverse(left, &block)
    yield data
    right.each(&block)
    # traverse(right, &block)
  end
end

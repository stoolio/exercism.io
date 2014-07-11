class Hexadecimal

  VALID_HEX = /^[\da-f]*$/

  HEX_TO_DEC = Hash[%w(0 1 2 3 4 5 6 7 8 9 a b c d e f).each_with_index.to_a]

  @@decimal_map = Hash.new do |hash, key|
    hash[key] = key.reverse.chars.each_with_index.reduce(0) do |acc, (digit, index)|
      acc + HEX_TO_DEC[digit] * 16**index
    end
  end

  attr_reader :hex

  def initialize(hex)
    self.hex = hex
  end

  def hex=(other)
    @hex = other.downcase
    @hex = '0' unless valid?
  end

  def to_decimal
    @@decimal_map[hex]
  end

  def valid?
    VALID_HEX.match(hex)
  end
end

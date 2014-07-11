zero = <<-NUMBER.chomp
 _
| |
|_|

NUMBER
one = <<-NUMBER.chomp

  |
  |

    NUMBER

two = <<-NUMBER.chomp
 _
 _|
|_

    NUMBER

three = <<-NUMBER.chomp
 _
 _|
 _|

    NUMBER

four = <<-NUMBER.chomp

|_|
  |

    NUMBER

five = <<-NUMBER.chomp
 _
|_
 _|

    NUMBER

six = <<-NUMBER.chomp
 _
|_
|_|

    NUMBER

seven = <<-NUMBER.chomp
 _
  |
  |

    NUMBER

eight = <<-NUMBER.chomp
 _
|_|
|_|

    NUMBER

nine = <<-NUMBER.chomp
 _
|_|
 _|

    NUMBER

# def transpose(text)
#   text.split("\n").map { |r| r = r.split(''); r << ' ' while r.length < 3; r }.transpose.map(&:join)
# end

# def hash_number(text)
#   text.split("\n").each_with_index.to_a.map { |s, i| [s.split('').each_with_index.to_a, i] }.reduce(0) do |acc, (el, i)|
#     acc + (i + 1) * el.reduce(0) do |acc2, (el2, j)|
#       acc2 + (j + 1) * {' '=>1,'_'=>2,'|'=>3}[el2]
#     end
#   end
# end

# def hash_number(text)
#   each_with_indexed_rows_columns(text).reduce(0) do |acc, (row, x)|
#     acc + (x + 1) * row.reduce(0) do |acc2, (char, y)|
#       acc2 + (y + 1) * char.to_i
#     end
#   end
# end

# def each_with_indexed_rows_columns(text)
#   text.tr(' _|', '123').split("\n").each_with_index.to_a.map do |s, index|
#     [s.split('').each_with_index.to_a, index]
#   end
# end

def each_character(text)
  length = text.split("\n").map(&:length).max
  text.split("\n").map { |r| r = r.split(''); r << ' ' while r.length < length; r }.transpose.each_slice(3)
end

CHAR_VALUES = {
  ' ' => 1,
  '_' => 2,
  '|' => 3
}

def hash_number(num)
  each_with_indexed_rows_columns(num).reduce(0) do |acc, (row, x)|
    acc + (x + 1) * row.reduce(0) do |acc2, (char, y)|
      acc2 + (y + 1) * CHAR_VALUES[char]
    end
  end
end

def each_with_indexed_rows_columns(num)
  # .tr(' _|', '123').split("\n")
  num.each_with_index.to_a.map do |s, index|
    [s.split('').each_with_index.to_a, index]
  end
end

hashes = [zero, one, two, three, four, five, six, seven, eight, nine].map do |num|
  hash_number(each_character(num).next.transpose.map(&:join).reject { |s| s.strip.empty? })
end

hashes.each_with_index { |h, i| puts "#{i}: #{h}" }

close = hashes.length - hashes.uniq.length

puts "Difference: #{close}"

puts "It's alive!!!!!" if close == 0

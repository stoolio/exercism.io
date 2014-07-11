class Crypto
  attr_reader :text

  alias_method :normalize_plaintext, :text

  def initialize(str)
    self.text = str
  end

  def text=(str)
    @text = normalize(str)
    @size = nil
    @plaintext_segments = nil
    @ciphertext = nil
    @normalized_ciphertext = nil
  end

  def size
    @size ||= Math.sqrt(text.length).ceil
  end

  def plaintext_segments
    @plaintext_segments ||= (size + 1).times.reduce([]) do |segments, i|
      segments << text.slice(i * size, size)
    end.compact.reject(&:empty?)
  end

  def ciphertext
    # @ciphertext ||= size.times.reduce('') do |cipher, i|
    #   cipher + plaintext_segments.reduce('') do |segtext, segment|
    #     segtext + (segment[i] || '')
    #   end + separator
    # end
    generate_ciphertext
  end

  def normalize_ciphertext
    generate_ciphertext(' ')
  end

  def normalized_ciphertext
    (0...size-1).reduce('') do |str, i|
      str + ciphertext.slice(size * i, size) + ' '
    end.strip
  end

  private

  def generate_ciphertext(sep = '')
    temp = plaintext_segments.map { |s| s.split('') }
    temp.last << '' while temp.last.length < size
    temp.transpose.map(&:join).join(sep)
  end

  def normalize(str)
    str.gsub(/\W/, '').downcase
  end
end

class Hamming

  def self.compute (dna1, dna2)
    distance = 0

    raise ArgumentError if dna1.length != dna2.length

    idx = 0
    while (idx < dna1.length)
      if dna1[idx] != dna2[idx]
        distance += 1
      end
      idx += 1
    end

    return distance
  end
end


module BookKeeping
  VERSION = 3
end



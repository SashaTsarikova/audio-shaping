export const getFrequencyNumber = (number) => {
  return 440 * Math.pow(2, ((number - 69) / 12))
}

export const notes = {
  'C': [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120].map((number) => getFrequencyNumber(number)),
  'Csharp': [1, 13, 25, 37, 49, 61, 73, 85, 97, 109, 121].map((number) => getFrequencyNumber(number)),
  'D': [2, 14, 26, 38, 50, 62, 74, 86, 98, 110, 122].map((number) => getFrequencyNumber(number)),
  'Dsharp': [3, 15, 27, 39, 51, 63, 75, 87, 99, 111, 123].map((number) => getFrequencyNumber(number)),
  'E': [4, 16, 28, 40, 52, 64, 76, 88, 100, 112, 124].map((number) => getFrequencyNumber(number)),
  'F': [5, 17, 29, 41, 53, 65, 77, 89, 101, 113, 125].map((number) => getFrequencyNumber(number)),
  'Fsharp': [6, 18, 30, 42, 54, 66, 78, 90, 102, 114, 126].map((number) => getFrequencyNumber(number)),
  'G': [7, 19, 31, 43, 55, 67, 79, 91, 103, 115, 127].map((number) => getFrequencyNumber(number)),
  'Gsharp': [8, 20, 32, 44, 56, 68, 80, 92, 104, 116, 128].map((number) => getFrequencyNumber(number)),
  'A': [9, 21, 33, 45, 57, 69, 81, 93, 105, 117, 129].map((number) => getFrequencyNumber(number)),
  'B': [10, 22, 34, 46, 58, 70, 82, 94, 106, 118, 130].map((number) => getFrequencyNumber(number)),
  'H': [11, 23, 35, 47, 59, 71, 83, 95, 107, 119, 131].map((number) => getFrequencyNumber(number)),
}

export const pause = {
  pause: 'pause'
}
const requiredFn = require("../index")

describe("createRangeArr", () => {
  test("will return an empty array when passed an empty array", () => {
    const input = []
    expect(requiredFn.createRangeArr(input)).toEqual([])
  })
  test("if function is passed an array containing a start number and end number that are the same number, function will return a new array containing that number", () => {
    const input = [1, 1]
    expect(requiredFn.createRangeArr(input)).toEqual([1])
  })
  test("function will return an array containing the range between two numbers provided", () => {
    const input = [1, 5]

    expect(requiredFn.createRangeArr(input)).toEqual([1, 2, 3, 4, 5])
  })
  test("function will return an array containing the range between two numbers provided", () => {
    const input = [5, 8]
    expect(requiredFn.createRangeArr(input)).toEqual([5, 6, 7, 8])
  })
  test("original input array is not mutated", () => {
    const input = [5, 8]
    requiredFn.createRangeArr(input)
    expect(input).toEqual([5, 8])
  })
  test("returned array has a new reference in memory to original array input", () => {
    const input = [5, 8]
    expect(requiredFn.createRangeArr(input)).not.toBe(input)
  })
})

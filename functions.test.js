const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')

test("Should return 2", () => {
    expect(returnTwo()).toEqual(2)
})

test("should return a greetig", () => {
    expect(greeting('James')).toEqual("Hello, James.")
})

describe("Tests the math functions", () => {

    test("Should return a sum of two numbers", () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14)
    })
    
    test("Should return a product of two numbers", () => {
        expect(multiply(5, 100)).toEqual(500)
        expect(multiply(5, 5)).toEqual(25)
    })
    
    test("Should return a quotient of two numbers", () => {
        expect(divide(100, 5)).toEqual(20)
        expect(divide(500, 5)).toEqual(100)
    })
    
    test("Should return an answer of two numbers", () => {
        expect(subtract(35, 5)).toEqual(30)
        expect(subtract(10, 10)).toEqual(0)
    })
})
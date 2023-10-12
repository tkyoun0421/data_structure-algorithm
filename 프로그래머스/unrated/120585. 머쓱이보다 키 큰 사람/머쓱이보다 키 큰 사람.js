function solution(array, height) {
    const arr = array.filter(item => item > height)
    return arr.length
}
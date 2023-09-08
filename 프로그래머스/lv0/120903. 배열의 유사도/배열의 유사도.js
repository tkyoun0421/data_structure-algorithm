function solution(s1, s2) {
    const newArr = s1.filter(item => s2.includes(item))
    return newArr.length
}
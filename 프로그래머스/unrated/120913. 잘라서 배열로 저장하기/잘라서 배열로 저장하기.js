function solution(my_str, n) {
    const result = [];

    for (let i = 0; i < my_str.length; i += n) {
        const substring = my_str.slice(i, i + n);
        result.push(substring);
    }

    return result;
}

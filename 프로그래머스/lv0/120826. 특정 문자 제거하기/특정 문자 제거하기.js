function solution(my_string, letter) {
    const parts = my_string.split(letter);
    const newString = parts.join('');
    return newString;
}
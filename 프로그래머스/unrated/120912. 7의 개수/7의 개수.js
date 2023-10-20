function solution(array) {
    let count = 0;
    array.forEach((number) => {
        const toString = number.toString();
        const sevens = toString.split('7');
        count += sevens.length - 1; 
    });

    return count;
}
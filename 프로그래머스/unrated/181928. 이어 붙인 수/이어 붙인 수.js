function solution(num_list) {
    let newArr = [];
    const even = num_list.filter(num => num % 2 === 0).join('');
    const odd = num_list.filter(num => num % 2 === 1).join('');
    
    return parseInt(odd) + parseInt(even);
}
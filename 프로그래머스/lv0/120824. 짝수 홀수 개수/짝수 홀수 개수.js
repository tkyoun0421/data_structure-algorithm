function solution(num_list) {
    const evenNumber = num_list.filter(item => item % 2 === 0).length;
    const oddNumber = num_list.filter(item => item % 2 !== 0).length;
    
    return [evenNumber, oddNumber]
}
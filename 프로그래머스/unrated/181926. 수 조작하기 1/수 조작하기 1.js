function solution(n, control) {
    const answer = control.split('').reduce((acc, cur) => {
        switch (cur) {
            case 'w':
                return acc + 1;
            case 's':
                return acc - 1;
            case 'd':
                return acc + 10;
            case 'a':
                return acc - 10;
            default:
                return acc;
        }
    }, n)
    
    return answer
}
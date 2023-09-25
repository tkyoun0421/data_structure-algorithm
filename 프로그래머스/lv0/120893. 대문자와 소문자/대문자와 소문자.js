function solution(my_string) {
  return my_string.replace(/[a-zA-Z]/g, function(match) {
    return match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase();
  });
}
//Complete the solution so that it returns true if the first argument(string) 
//passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    if (!ending) return true;
    let arr = str.split(ending);
    return arr.length === 2 && arr.pop() === '';
  }

// function solution(str, ending){
//   return str.endWith(ending);
// }


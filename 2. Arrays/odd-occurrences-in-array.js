function solution(A) {
    var aux
    while (A.length > 0) {
        aux = A.indexOf(A[0], 1)
        if (aux === -1) {
            return A[0]
        }
        A.splice(aux, 1)
        A.shift()
    }
}
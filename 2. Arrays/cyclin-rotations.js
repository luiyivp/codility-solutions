function solution(A, K) {
    if (A.length === K || K === 0) {
        return A
    }
    var aux
    for (var i = 0; i < K; i++) {
        aux = A.pop()
        A.unshift(aux)
    }
    return A
}
function solution(A) {
    var sum = max = A[0]
    var length = A.length
    for (let i = 1; i < length; i++) {
        if (A[i] > max) max = A[i]
        sum += A[i]
    }
    diff = sum - (max * (max + 1) / 2)
    return diff == 0 ? 1 : 0
}
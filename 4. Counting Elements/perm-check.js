function solution(A) {
    var sum = max = A[0]
    var n = A.length
    var set = new Set()
    var comp = (n * (n + 1) / 2)
    set.add(A[0])
    for (let i = 1; i < n; i++) {
        sum += A[i]
        set.add(A[i])
    }
    return sum == comp && set.size == n ? 1 : 0
}
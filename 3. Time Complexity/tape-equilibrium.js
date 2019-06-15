function solution(A) {
    let length = A.length
    var left = A[0]
    var right = 0
    var diff, currentDiff
    for (let i = 1; i < length; i++) {
        right += A[i]
    }
    diff = currentDiff = Math.abs(right - left)
    for (let i = 1; i < length; i++) {
        currentDiff = Math.abs(right - left)
        if (currentDiff < diff) {
            diff = currentDiff
        }
        left += A[i]
        right -= A[i]
    }
    return diff
}
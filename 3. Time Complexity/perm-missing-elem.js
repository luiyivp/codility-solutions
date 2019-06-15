function solution(A) {
    if (A.length === 0) {
        return 1
    }
    let min = max = sum = total = 0
    A.forEach((value, index, array) => {
        if (value < min || min === 0) {
            min = value
        }
        if (value > max) {
            max = value
        }
        sum += value
    })
    if (min > 1) return 1
    total = (max * (max + 1)) / 2
    result = total - sum
    if (result === 0) return max + 1
    return result
}

var binary = ''

function solution(N) {
    toBinary(N)
    longestBinaryGap(binary)
    return longestBinaryGap(binary)
}

function toBinary(num) {
    if (num == 0) {
        return binary
    }
    else {
        if (num % 2 == 1) {
            binary = '1' + binary
            toBinary(~~(num / 2))
        } else {
            binary = '0' + binary
            toBinary(~~(num / 2))
        }
    }
}

function longestBinaryGap(binary) {
    var currentGap = 0
    var maxGap = 0
    for (var i = 0; i < binary.length; i++) {
        if (binary.charAt(i) == 0) {
            currentGap++
        } else {
            if (currentGap > maxGap) {
                maxGap = currentGap
                currentGap = 0
            }
        }
    }
    return maxGap
}
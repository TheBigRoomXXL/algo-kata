export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0
    let high = haystack.length
    while (low != high) {
        let i = Math.floor(low + (high - low) / 2)
        printSearch(haystack, low, high, i)
        let value = haystack[i]
        if (value == needle) {
            return true
        } else if (needle > value) {
            low = i + 1
        } else {
            high = i
        }
    }
    return false
}

function printSearch(haystack: number[], low: number, high: number, i: number) {
    let s = ""
    for (let i = 0; i < haystack.length; i++) {
        if (i == i) {
            s += i
        }
        if (i >= low && i < high) {
            s += "-"
        } else {
            s
                += "."
        }
    }
    console.log(s)
}

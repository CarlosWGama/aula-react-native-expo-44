A = [1, 2, 3]
K = 4;

function teste(A) {
    n = A.length;
    for (let i = 0; i < n - 1; i++) {
        console.log(A[i] + "=" + A[i + 1]);
        if (A[i] + 1 < A[i + 1])
            return false;
    }
    if (A[0] != 1 || A[n - 1] != K)
        return false;
    else
        return true;
}


console.log(teste(A));
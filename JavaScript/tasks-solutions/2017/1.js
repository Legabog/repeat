function edinorog(N, M, K) {
  const edinorog = N/M * K

  if ((N / K) % 1 !== 0 ) { 
    const a = Math.trunc(N / K)
    const b = N/K - a

    b * N / K
  } else {
    return edinorog * N/M
  }
}
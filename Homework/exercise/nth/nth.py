def nth(array, n=0):
    l = len(array)
    if n >= 0:
        return array[n]
    else:
        return array[l+n]
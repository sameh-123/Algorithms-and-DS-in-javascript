function mergeSort(ar){
    let n=ar.length
    if(n==1)return ar
    let mid=Math.floor(ar.length/2)
    let left=ar.slice(0,mid)
    let right=ar.slice(mid,n)
    left=mergeSort(left)
    right=mergeSort(right)
    let new_ar=[]
    let l=0,r=0
    while(l<left.length&&r<right.length){
        if(left[l]<right[r]){
            new_ar.push(left[l])
            l++
        }
        else{
            new_ar.push(right[r])
            r++
        }
    }
    while(l<left.length){
        new_ar.push(left[l])
        l++
    }
    while(r<right.length){
        new_ar.push(right[r])
        r++
    }
    return new_ar
}
mergeSort([3,0,4,1,5,2])

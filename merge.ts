function Merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let arr1: number[] = []

    for(let i=0, a=0, b=0; i<collection_1.length + collection_2.length; i++){
        if(a>=collection_1.length) {
            for(; b<collection_2.length; b++) {
                arr1.push(collection_2[b])
                // console.log(arr1)
            }
            break;
        }
        else if(b>=collection_2.length) {
            for(; a<collection_1.length; a++) {
                arr1.push(collection_1[a])
                // console.log(arr1)
            }
            break;
        }

        if(collection_1[a] > collection_2[b]) {
            arr1.push(collection_2[b])
            b++
        }
        else {
            arr1.push(collection_1[a])
            a++
        }
        // console.log(arr1)
    }

    // console.log('*************')

    let arr2: number[] = []
    for(let i=0, c=collection_3.length-1, d=0; i<collection_3.length + arr1.length; i++) {
        if( c<0 ) {
            for(; d<arr1.length; d++) {
                arr2.push(arr1[d])
                // console.log(arr2)
            }
            break;
        }
        else if(d>=arr1.length) {
            for(; c>=0; c--) {
                arr2.push(collection_3[c])
                // console.log(arr2)
            }
            break;
        }

        if(collection_3[c] > arr1[d]) {
            arr2.push(arr1[d])
            d++
        }
        else {
            arr2.push(collection_3[c])
            c--
        }
        // console.log(arr2)
    }

    return arr2
}

module.exports = Merge

// console.log(merge( [], [], [] )) //all blank inputs

// console.log(merge( [-100,1,2], [3,4,5], [888,7,6] )) //sequence

// console.log(merge( [2,4,5,6], [0,1], [7,6,5] )) //size varying
// console.log(merge( [2], [-5,1], [97,10,6,5] ))

// console.log(merge( [0,0,5,10], [1,2,3,3333], [8,6,4] )) //repeating numbers

// console.log(merge(  )) //blank input
// console.log(merge( [0,1,2], [], [8,7,6] ))
// console.log(merge( [0,1,2], [3,4,5], [] ))
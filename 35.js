// Dado un array, crear otro array con el primer y ultimo elemento del array original

// Input: [100,200,500,600]
// Output: [100,600]

const newArray = ((array)=>{

    array = cleanArray(array)
    let newArray = []
    newArray.push(array[0])
    newArray.push(array[array.length-1])

    console.log(newArray)

})

const cleanArray =((array)=>{
    array = array.filter(element => typeof element ==='number')
    return array
})


newArray([1,2,3,4,5,6,7,8,9,10,'hero'])
export default function checkSorting(arr){
    return arr.sort((a, b) => a.health < b.health ? 1 : -1)
}
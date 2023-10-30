function findNum(arr) {
    let min = arr[0];
    for (i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
    }return min;
};

function sortNum(arr) {
    let finalArray = [];
    while (arr.length > 0) {
      let min = findNum(arr);
      finalArray.push(min);
      arr.splice(arr.indexOf(min), 1);
    }return finalArray;
  
  }


//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
nums1.sort(function(a, b){return a-b});

console.log(nums1);

nums2.sort(function(a, b){return a-b});

console.log(nums2)


nums3.sort(function(a, b){return a-b});

console.log(nums3)

//Sort each array in decending order.

nums3.sort(function(b, a){return a-b});

console.log(nums3)
nums1.sort(function(b, a){return a-b});
console.log(nums1)

nums2.sort(function(b, a){return a-b});
console.log(nums2);
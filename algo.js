Zip Arrays into Map


Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
Associative arrays are sometimes called maps because a key (string) maps to a value 
*/

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];

const expected1 = {
abc: 42,
3: "wassup",
yo: true,
};

const keys2 = [];
const vals2 = [];
const expected2 = {};


const keys3 = ["abc", 3, ['animal', 'treat']];
const vals3 = [42, "wassup", true];

const expected3 = {
    abc: 42,
    3: "wassup",
    'animal': true,
    'treat': true
};

const keys4 = ["abc", 3, 'yo'];
const vals4 = [42, "wassup"];

const expected4 = {
    abc: 42,
    3: "wassup",
    'yo': null
};

const keys5 = ["abc", 3];
const vals5 = [42, "wassup", true];

const expected5 = false

/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */
function zipArraysIntoMap(keys, values) {
    if(values.length < keys.length){
        return false
    }

    let result ={}

    for(i= 0; i < keys.length; i++){
        result[keys] = values[i]
    }
    console.log(result)
}
zipArraysIntoMap(keys1, vals1)
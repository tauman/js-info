'use strict';


const JOE = 'Joe';
const TOM = 'Tom';
const MIKE = 'Mike';
const AARON = 'Aaron';

// Note that Maps can contain any type of object and
// or value and the key and also be any type of object
// or value, including 'undefined' and 'null'

// Create a set from an array of 2 element arrays
const map = new Map([[JOE, 'good'], [TOM, 'fair'], [MIKE, 'bad']]);

// Test if set contains a key:
map.has(JOE); // <- be careful with objects as keys

// Remove a member based on the key:
map.delete(JOE);

// Add a member
map.set(AARON, 'good');

// remove all members
map.clear();

// return an iterator of all keys
map.keys();

// iterate over the keys() using for-of
for(const key of map.keys()) {
    console.log(key);
}

// return an iterator of all members
map.values();

// iterate over the values() using for-of
for(const value of map.values()) {
    console.log(value);
}

// return an iterator of entries as [key, value] pairs
map.entries();

// iterate over the entries() using for-of
for(const entry of map.entries()) {
    console.log(entry);
}

// execute provided with once for each member
// note that 'map' refers to the map itself
map.forEach((key, value, mapSelf) => console.log(key + '=>' + value));
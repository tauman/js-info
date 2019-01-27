'use strict';


const JOE = 'Joe';
const TOM = 'Tom';
const MIKE = 'Mike';
const AARON = 'Aaron';

// Note that Sets can contain any type of object
// or value including 'undefined' and 'null'

// Create a set from an array
const set = new Set([JOE, TOM, MIKE]);

// Test if set contains a value:
set.has(JOE); // <- be careful with objects

// Remove a member
set.delete(JOE);

// Add a member
set.add(AARON);

// remove all members
set.clear();

// return an iterator of all members
set.values();

// iterate over the values() using for-of
for(const value of set.values()) {
    console.log(value);
}

// execute provided with once for each member
// note that 'member1' and 'member2' are the same value
// and that 'set' refers to the set itself
set.forEach((member1, member2, setSelf) => console.log(member1));
import _ from '../src/mod.js'
import{assert}from "https://deno.land/std@0.63.0/testing/asserts.ts";

Deno.test("eq test", () => {
    var object = { 'a': 1 };
    var other = { 'a': 1 };

    const x = _.eq(object,object); // => true
    console.log('x=', x)
    assert(x===true)

    const y = _.eq(object,other); // => flase
    console.log('y=', y)
    assert(y===false)

    const z = _.eq('a', 'a'); // => true
    console.log('z=', z)
    assert(z===true)

    const w = _.eq('a', Object('a')); // => flase
    console.log('w=', w)
    assert(w===false)

    const v = _.eq(NaN, NaN); // => true
    console.log('v=', v)
    assert(v===true)
  })

/*
lodash example
var object = { 'a': 1 };
var other = { 'a': 1 };
 
_.eq(object, object);
// => true
 
_.eq(object, other);
// => false
 
_.eq('a', 'a');
// => true
 
_.eq('a', Object('a'));
// => false
 
_.eq(NaN, NaN);
// => true
*/

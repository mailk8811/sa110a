# eq - 傳統方式:先寫程式再寫測試   
## 一、程式  
1. 功能 
``` 
Performs a SameValueZero comparison between two values to determine if they are equivalent.  
```  
2. 寫程式  
```
export function eq(a, b) {
    if (Number.isNaN(a) && Number.isNaN(b)){return true}
    else if(a !== b){return false}
    else return true
  }
```  
3. 寫測試程式  
```
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
```  


## 二、測試結果
```
Check file:///Users/malik8811/Desktop/110/sa110a/Homework/exercise/test/eq_test.js
(base) malik8811@chenkaimingde-MacBook-Pro test % deno test eq_test.js
running 1 tests
test eq test ... x= true
y= false
z= true
w= false
v= true
ok (4ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (5ms)
```
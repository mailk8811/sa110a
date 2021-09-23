# TDD 先寫測試再寫程式
## Multiply
一、功能
```
Multiply two numbers.
```  
二、寫測試程式
```
from multiply import multiply

"""
_.multiply(8, 7);
// => 56
"""

print("multiply(8, 7) = {}".format(multiply(8, 7)))
```
三、寫程式
```
#Multiply two numbers.

def multiply(multiplier, multiplicand):
    return multiplier * multiplicand
```

四、測試結果
```
(base) malik8811@chenkaimingde-MacBook-Pro multiply % python ./multiply_test.py
multiply(8, 7) = 56
```

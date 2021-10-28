# 期中報告-Python密碼學

## 一、什麼是密碼學
&emsp;&emsp;密碼學是研究編制密碼和破解密碼的技術學門。研究密碼變化的客觀規律，應用於編制密碼以保守通訊秘密的，成為編碼學；應用於破解密碼以獲取通訊情報的，稱為破譯學，總稱密碼學。  
  

### （一）專業術語
```
密鑰：分為加密密鑰和解密密鑰。

明文：沒有進行加密，能夠直接代表原文含義的信息。

密文：經過加密處理處理之後，隱藏原文含義的信息。

加密：將明文轉換成密文的實施過程。

解密：將密文轉換成明文的實施過程。
``` 
---  

## 二、反向密碼  
&emsp;&emsp;反向密碼使用的是一種反轉纯文本字符串的方式來轉換為密文，其加密和解密的過程是相同的，要解密密文，用戶僅需反轉密文即可獲得純文本。 

### （一）Python 實現反向密碼  

原始碼：  
```
message = 'What's the secret?'
translated = ''
i = len(message) - 1
while i >= 0:
print(translated)
    translated = translated + message[i]
    i = i - 1 
 ```  
運行結果：  
```
?terces eht s'tahW
```  
*Note:   
反向密碼的主要缺點是非常弱，駭客可以輕鬆破解秘聞以獲取原始訊息。因此，反向密碼不被認為是維護安全通訊信道的良好選擇。*  

---

## 三、凱薩密碼
&emsp;&emsp;凱薩加密法稍微複雜一點，但也是非常容易破解的，其通過排列明文和密文字母表，密文字母通過將明文字母表向左或右移動固定數目的位置。或者先將字母用0~25代替，然後加密(x+n)mod26，解密即為(x-n)mod26。    
<div align="center"><img src="https://github.com/mailk8811/sa110a/blob/master/pic/1.jpeg"></div>  
  
*Note:
對一段明文訊息連續應用多個不同的偏移量進行凱撒密碼規則的加密，並不會增強安全等級。即輪盤的多次旋轉，實際上等同於抵消後的一次旋轉。多次應用的不同偏移量，最終等同於抵消後的一次偏移量，對於暴力破解來說並不會增加複雜度。
如第一次對明文實施偏移 3 位的凱撒加密，再對生成的密文實施偏移 10 位的加密，實際上相當於對最初的明文實施了偏移 13 位的加密。*


### （一）Python 實現凱薩密碼  
原始碼：
```
while True:
 key = input("Please input a key number (like 13):\n") or 13
 mode = input("\nPlease input mode (encrypt or decrypt):\n") or "encrypt"
 
 symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !?.'
 # 根據數字 key 對字母表 symbols 進行偏移操作，形成密文字母表 ciphers
 ciphers = symbols[int(key):] + symbols[:int(key)]
 # 根據加密與解密動作，生成明文字母到密文字母（或密文到明文）的對應關係
 transtab = str.maketrans(symbols,ciphers) if mode == 'encrypt' else str.maketrans(ciphers,symbols)
 message = input("\nPlease input plaintext or ciphertext:\n")
 # 完成明文到密文（或密文到明文）的轉換
 
 result = message.translate(transtab)
 print(f"\nThe result is: {result}\n\n")
```  
運行結果：  
```
Please input a key number (like 13):
13

Please input mode (encrypt or decrypt):
encrypt

Please input plaintext or ciphertext:
This is my secret message.

The result is: guv6Jv6Jz!J6rp5r7Jzr66ntrM


Please input a key number (like 13):
13

Please input mode (encrypt or decrypt):
decrypt

Please input plaintext or ciphertext:
guv6Jv6Jz!J6rp5r7Jzr66ntrM

The result is: This is my secret message.
```  
### （二）Python 對凱薩密碼的爆破  
原始碼： 
```
symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !?.'

ciphertext = input("Please input ciphertext:\n")


for key in range(len(symbols)):
    ciphers = symbols[key:] + symbols[:key]
    transtab = str.maketrans(ciphers, symbols)
    plaintext = ciphertext.translate(transtab)

    print(f'Key #{key}: {plaintext}'
```
運行結果：  
```
Please input ciphertext:
guv6Jv6Jz!J6rp5r7Jzr66ntrM
Key #0: guv6Jv6Jz!J6rp5r7Jzr66ntrM
Key #1: ftu5Iu5Iy I5qo4q6Iyq55msqL
Key #2: est4Ht4Hx0H4pn3p5Hxp44lrpK
Key #3: drs3Gs3Gw9G3om2o4Gwo33kqoJ
Key #4: cqr2Fr2Fv8F2nl1n3Fvn22jpnI
Key #5: bpq1Eq1Eu7E1mkzm2Eum11iomH
Key #6: aopzDpzDt6Dzljyl1DtlzzhnlG
Key #7: ZnoyCoyCs5CykixkzCskyygmkF
Key #8: YmnxBnxBr4BxjhwjyBrjxxfljE
Key #9: XlmwAmwAq3AwigvixAqiwwekiD
Key #10: Wklv.lv.p2.vhfuhw.phvvdjhC
Key #11: Vjku?ku?o1?ugetgv?oguucigB
Key #12: Uijt!jt!nz!tfdsfu!nfttbhfA
Key #13: This is my secret message.
Key #14: Sghr0hr0lx0rdbqds0ldrrZfd?
Key #15: Rfgq9gq9kw9qcapcr9kcqqYec!
...
```
---   

## 四、換位加密法
&emsp;&emsp;密碼學是研究編制密碼和破解密碼的技術學門。研究密碼變化的客觀規律，應用於編制密碼以保守通訊秘密的，成為編碼學；應用於破解密碼以獲取通訊情報的，稱為破譯學，總稱密碼學。  
<hr>   
 
## 重要文獻參考資料   
[[1]密碼學-維基百科](https://www.starky.ltd/2020/08/05/python-cryptography-caesar-cipher/)  
[[2]套用密碼學基礎(作者: 張益發,趙亞群,張習勇,張鐸)](https://www.itsfun.com.tw/%E5%AF%86%E7%A2%BC%E5%AD%B8/wiki-9575575-3900455)  
[[3]凱薩密碼](https://www.starky.ltd/2020/08/05/python-cryptography-caesar-cipher/)  

# 期中報告-Python密碼學

## 一、什麼是密碼學
&emsp;&emsp;密碼學是研究編制密碼和破解密碼的技術學門。研究密碼變化的客觀規律，應用於編制密碼以保守通訊秘密的，成為編碼學；應用於破解密碼以獲取通訊情報的，稱為破譯學，總稱密碼學。  
<hr>  

### （一）專業術語
```
密鑰：分為加密密鑰和解密密鑰。

明文：沒有進行加密，能夠直接代表原文含義的信息。

密文：經過加密處理處理之後，隱藏原文含義的信息。

加密：將明文轉換成密文的實施過程。

解密：將密文轉換成明文的實施過程。
``` 
<hr>   

## 三、凱薩加密法
&emsp;&emsp;凱薩加密法稍微複雜一點，但也是非常容易破解的，其通過排列明文和密文字母表，密文字母通過將明文字母表向左或右移動固定數目的位置。或者先將字母用0~25代替，然後加密(x+n)mod26，解密即為(x-n)mod26。    
<img src="https://github.com/mailk8811/sa110a/blob/master/pic/1.jpeg" align="center">  
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
<hr>   

## 四、什麼是密碼學
&emsp;&emsp;密碼學是研究編制密碼和破解密碼的技術學門。研究密碼變化的客觀規律，應用於編制密碼以保守通訊秘密的，成為編碼學；應用於破解密碼以獲取通訊情報的，稱為破譯學，總稱密碼學。  
<hr>   
 
## 重要文獻參考資料  
<a href="https://zh.wikipedia.org/wiki/%E5%AF%86%E7%A0%81%E5%AD%A6">[1]密碼學-基百科</a>   
<a href="https://www.itsfun.com.tw/%E5%AF%86%E7%A2%BC%E5%AD%B8/wiki-9575575-3900455">[2]套用密碼學基礎(作者: 張益發,趙亞群,張習勇,張鐸)</a>  
<a href="https://www.starky.ltd/2020/08/05/python-cryptography-caesar-cipher/">[3]凱薩密碼原始碼</a>

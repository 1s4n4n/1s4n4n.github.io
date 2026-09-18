---
title: WannaGame Championship 2025 
publishDate: 2025-12-09 12:26:00
description: 'first time dealing with CFF xD'
tags:
  - CFF
  - backtracking
  - Dynamic Programming
  - Reverse
  - ELF
  - obfuscation
heroImage: { src: './thumbnail.jpg', color: '#B4C6DA' }
language: 'Tiếng Việt'
---
## Who's luckier?

Đây là câu mình giải được sau giải, nhờ có sự trợ giúp của author 1 chút. Bài viết sẽ khá dài (vì mục đích ghi chép và học tập), bạn nào ngại đọc thì hãy tắt và đi làm việc bạn thấy có ích hơn. Mọi đóng góp về kiến thức hoặc câu hỏi vui lòng comment dưới bài viết hoặc liên hệ qua discord: ***rn4n4s1e***, mình rất sẵn sàng trao đổi với bạn!
***

### Tổng quan: 
Đề chỉ cho đúng 2 file như bên dưới: 
![image](./0.png)

Như vậy, file cần dc phân tích là `Whoisluckier`, file bị mã hóa là `flag_enc.dat`. Chỉ cần tìm được loại mã hóa => viết script python decode => ta có được flag.

*** 
### Phân tích: 
Load file đầu tiên vào IDA, ta nhận được 1 hàm main rất kì lạ: 
![image](./1.png)
Chắc chỉ cần nhìn IDA-View-A cũng đã hiểu được sự kì lạ của hàm này, tiếp tục xem thử pseudocode ntn 

<details open>
    <summary>main:</summary>

```C

__int64 __fastcall main(int a1, char **a2, char **a3)
{
  unsigned int v3; // eax
  __int64 v4; // rbx
  __int64 v5; // rax
  __int64 v6; // rax
  __int64 v7; // rax
  __int64 v8; // rax
  unsigned __int64 v9; // rax
  void *v10; // rsp
  unsigned int v11; // r12d
  __int64 v12; // rax
  __int64 v13; // rax
  __int64 v14; // rax
  _BYTE v16[3]; // [rsp+8h] [rbp-490h] BYREF
  char v17; // [rsp+Bh] [rbp-48Dh] BYREF
  int j; // [rsp+Ch] [rbp-48Ch]
  int i; // [rsp+10h] [rbp-488h]
  int v20; // [rsp+14h] [rbp-484h]
  __int64 v21; // [rsp+18h] [rbp-480h]
  __int64 v22; // [rsp+20h] [rbp-478h]
  char *v23; // [rsp+28h] [rbp-470h]
  char *v24; // [rsp+30h] [rbp-468h]
  _QWORD v25[2]; // [rsp+38h] [rbp-460h] BYREF
  _QWORD v26[2]; // [rsp+48h] [rbp-450h] BYREF
  _DWORD v27[8]; // [rsp+58h] [rbp-440h] BYREF
  _BYTE v28[248]; // [rsp+78h] [rbp-420h] BYREF
  __int64 v29; // [rsp+170h] [rbp-328h] BYREF
  _BYTE v30[520]; // [rsp+278h] [rbp-220h] BYREF
  unsigned __int64 v31; // [rsp+480h] [rbp-18h]

  v31 = __readfsqword(0x28u);
  v3 = time(0LL);
  srand(v3);
  std::operator<<<std::char_traits<char>>(&std::cout, "Please wait!...\n");
  while ( 2 )
  {
    switch ( dword_28E20 )
    {
      case 0:
        dword_28E28 = rand() % 5000;
        dword_28E20 = 9;
        continue;
      case 1:
        if ( off_23C60 != (_UNKNOWN *)10122005 )
          continue;
        goto LABEL_29;
      case 2:
        off_23C60 = (_UNKNOWN *)(rand() % 10122005 % 3740122799LL);
        off_23C60 = (_UNKNOWN *)((char *)off_23C60 + (__int64)off_23C60 % 199);
        off_23C60 = (_UNKNOWN *)((unsigned __int64)off_23C60 ^ 0x4E1F);
        off_23C60 = (_UNKNOWN *)(0x398974BD8E815LL % ((__int64)off_23C60 + 3405692655LL));
        off_23C60 = (_UNKNOWN *)((__int64)off_23C60 % 10);
        if ( off_23C60 == (_UNKNOWN *)byte_9 )
        {
          dword_28E2C = dword_28E24;
          dword_28E20 = 5;
        }
        else
        {
          dword_28E20 = 0;
        }
        continue;
      case 4:
        if ( *((_DWORD *)off_23C68 + dword_28E24) <= *((_DWORD *)off_23C68 + dword_28E24 - 1)
          || *((_DWORD *)off_23C78 + *((int *)off_23C68 + dword_28E24)) <= *((_DWORD *)off_23C78
                                                                           + *((int *)off_23C68 + dword_28E24 - 1)) )
        {
          dword_28E20 = 6;
        }
        else
        {
          off_23C60 = (_UNKNOWN *)((char *)off_23C60 - 559038737 - 0xCAFEBABE % dword_28E20);
          dword_28E20 = 5;
        }
        continue;
      case 5:
        v27[0] = 20;
        dword_28E24 = *(_DWORD *)sub_15BD6(&dword_28E24, v27);
        dword_28E20 = 4;
        if ( !--dword_28E24 )
          dword_28E20 = 10;
        continue;
      case 6:
        dword_28E24 = 0;
        dword_28E20 = 0;
        continue;
      case 7:
        if ( dword_28E64 != 39577 )
        {
          dword_28E20 = 6;
          continue;
        }
LABEL_29:
        v4 = std::string::length(&unk_28E40);
        v5 = std::string::c_str(&unk_28E40);
        SHA256(v5, v4, &unk_28E00);
        for ( i = 0; i <= 15; ++i )
        {
          std::string::substr(v30, &unk_28DE0, 2 * i, 2LL);
          v6 = std::string::c_str(v30);
          __isoc23_sscanf(v6, "%02hhx", (char *)&unk_28DC0 + i);
          std::string::~string(v30);
        }
        std::ifstream::basic_ifstream(v30, "flag_enc.dat", 4LL);
        v24 = &v17;
        sub_15C4C(v26);
        sub_15C02(v25, v30);
        sub_15C76(v27, v25[0], v25[1], v26[0], v26[1], &v17);
        sub_15F48(&v17);
        std::ifstream::close(v30);
        v21 = EVP_CIPHER_CTX_new();
        v7 = EVP_aes_256_cbc();
        EVP_DecryptInit_ex(v21, v7, 0LL, &unk_28E00, &unk_28DC0);
        v8 = sub_15D60(v27) + 16;
        v22 = v8 - 1;
        v9 = 16 * ((v8 + 15) / 0x10uLL);
        while ( v16 != &v16[-(v9 & 0xFFFFFFFFFFFFF000LL)] )
          ;
        v10 = alloca(v9 & 0xFFF);
        if ( (v9 & 0xFFF) != 0 )
          *(_QWORD *)&v16[(v9 & 0xFFF) - 8] = *(_QWORD *)&v16[(v9 & 0xFFF) - 8];
        v23 = v16;
        LODWORD(v26[0]) = 0;
        v20 = 0;
        v11 = sub_15D60(v27);
        v12 = sub_15D84(v27);
        EVP_DecryptUpdate(v21, v23, v26, v12, v11);
        v20 = v26[0];
        EVP_DecryptFinal_ex(v21, &v23[SLODWORD(v26[0])], v26);
        v20 += LODWORD(v26[0]);
        EVP_CIPHER_CTX_free(v21);
        std::ofstream::basic_ofstream(v28, "flag_output.png", 4LL);
        if ( (unsigned __int8)std::ios::operator!(&v29) )
        {
          v13 = std::operator<<<std::char_traits<char>>(&std::cerr, "Error: Cannot open output file flag_output.png");
          std::ostream::operator<<(v13, &std::endl<char,std::char_traits<char>>);
        }
        std::ostream::write((std::ostream *)v28, v23, v20);
        std::ofstream::close(v28);
        v14 = std::operator<<<std::char_traits<char>>(
                &std::cout,
                "Decrypted data successfully written to flag_output.png");
        std::ostream::operator<<(v14, &std::endl<char,std::char_traits<char>>);
        std::ofstream::~ofstream(v28);
        sub_15D06(v27);
        std::ifstream::~ifstream(v30);
        return 0LL;
      case 8:
        dword_28E20 = 1;
        off_23C60 = (_UNKNOWN *)10120564;
        dword_28E28 = rand() % 20 + 1;
        continue;
      case 9:
        *((_DWORD *)off_23C68 + dword_28E24++) = dword_28E28;
        dword_28E20 = 2;
        continue;
      case 10:
        v27[0] = 20;
        dword_28E24 = *(_DWORD *)sub_15BD6(&dword_28E2C, v27);
        std::operator<<<std::char_traits<char>>(
          &std::cout,
          "I think not many people have accumulated enough virtue to be blessed with the luck to be here :)\n");
        dword_28E60 = sub_2816((unsigned int)dword_28E24);
        dword_28E20 = 12;
        continue;
      case 11:
        dword_28E20 = 12;
        dword_28E24 = 8;
        off_23C60 = (_UNKNOWN *)((unsigned __int64)off_23C60 | 0xC);
        continue;
      case 12:
        if ( dword_28E60 <= dword_28E64 )
        {
          dword_28E20 = 6;
        }
        else
        {
          std::string::operator=(&unk_28E40, &unk_17852);
          for ( j = dword_28E24 - 1; j >= 0; --j )
          {
            sub_15561(v30, *((unsigned int *)off_23C68 + j));
            std::string::operator+=(&unk_28E40, v30);
            std::string::~string(v30);
          }
          dword_28E20 = 7;
          dword_28E64 = dword_28E60;
          std::operator<<<std::char_traits<char>>(&std::cout, "I dare you are so lucky to be here!\n");
        }
        continue;
      default:
        continue;
    }
  }

```
</details>

Sau khi đọc mã giả của IDA + nhìn Graph View bên trên, mình có thể chắc chắn đây là `Control Flow Flattening (CFF)` - 1 dạng obfuscation điển hình. Thay vì các dòng lệnh tuần tự dễ đọc, toàn bộ logic chương trình bị nhét vào một vòng lặp `while(2)` to đùng, và tất cả đều được điều hướng bằng biến trạng thái `dword_28E20`

Nhìn sơ qua, code tràn ngập các hàm `rand()`, `srand(time(0))` và các phép toán số học nhìn vào đã thấy đau đầu, đặc biệt là ở `case 2`. Suy nghĩ ban đầu của mình là: bài này có lẽ sẽ bắt mình predict `PRNG` hoặc là bruteforce seed theo thời gian để có thể trở thành kẻ may mắn.
    
Nhìn vào code bên trên, mình đã để ý tới dòng này: 
```C
v3 = time(0LL);
srand(v3);
```

Và sau đó là hàng loạt các Case (0, 2, 8) sử dụng `rand()` để sinh số và thực hiện các phép toán phức tạp.

Bây giờ câu hỏi đặt ra là: Liệu mình có cần phải `brute-force seed` thời gian hay dự đoán thuật toán `PRNG` không?

Để trả lời câu hỏi này, mình mất khá nhiều thời gian (đâu đó 3-4 tiếng) và cuối cùng mình cũng nhận ra mâu thuẩn trong đống logic này. 

Đầu tiên, ta có dữ liệu đầu vào là file `flag_enc.dat` đi kèm và cơ chế giải mã của nó nằm ở `LABEL` số 29, case này sẽ sử dụng `AES-CBC` để giải mã file trên. Nhưng, `AES` lại là 1 thuật toán đối xứng, nghĩa là để giải mã đúng, `Key` phải luôn cố định và chính xác.

Và nếu ta để ý hành vi của `rand()`, hàm `srand(time(0))` sẽ khởi tạo seed dựa trên thời gian thực. Rồi cứ mỗi giây trôi qua `rand()` sẽ sinh ra một dãy số hoàn toàn khác nhau. 

Như vậy ta có thể kết luận điều gì? Nếu chương trình thực sự dùng `rand()` để tạo ra `Key`, thì mỗi lần chạy `Key` sẽ thay đổi. Một `Key` thay đổi liên tục không thể nào giải mã một file `flag_enc.dat` cố định được (trừ khi bạn thực sự `luckier` chạy đúng vào giây mà tác giả đã tạo cái file này, điều này chắc chắn là không thể xảy ra :omegalul:) 
    
Vậy ta đã biết việc sử dụng `rand()` để sinh `key` chỉ là 1 cái mồi nhử để đánh lạc hướng vì với phân tích trên, logic này là vô nghĩa để dùng trong việc tạo `key`. 
***
Trong lúc bế tắc cùng cực thì BTC đã đưa ra thêm 1 hint rất đáng giá cho mình: 
![image](./2.png)

Câu `Are you sure every piece of code is executed` thực sự làm mình phải suy nghĩ kĩ, và mình lại rẽ sang 1 hướng mới từ hint này. 

Trong mô hình `CFF` này, các khối lệnh dùng `rand()` (như Case 0, Case 2) thực chất đóng vai trò là `Generator`. Nó sinh số ngẫu nhiên và ném vào bộ kiểm tra. Case 4 và Case 7 sẽ là các `Validator` => khả năng cao DeadCode ở đây sẽ là phần `Generator`. Vậy là về cơ bản, ta không cần quan tâm chương trình sinh số kiểu gì (ngẫu nhiên, hay theo công thức, idgaf lol). Chúng ta chỉ cần quan tâm kết quả cuối cùng phải thỏa mãn bộ kiểm tra `valid` ở case 4 & 7.

***
Rồi giờ dẹp cái phần sinh số ngẫu nhiên qua 1 bên đi, nhìn lại cái hint của BTC: `For those familiar with LIS, you're on the right track`. Research và mình biết được nó là `Longest Increasing Subsequence` (Dãy con tăng dần), mình bỏ thêm khoảng 1 tiếng (vì mình ngu lập trình thi đấu :D) để đọc tài liệu và ví dụ về nó, các bạn có thể cân nhắc đọc ở [đây](https://www.geeksforgeeks.org/dsa/longest-increasing-subsequence-dp-3/). 
    
Sau đó quay lại chương trình để kiểm tra xem liệu LIS nó nằm ở đâu? 
    
Rất may là nó nằm ngay ở Case 4 & 7, thứ mà mình quyết định check đầu tiên.
    
Hãy nhìn đoạn này ở case 4:
![image](./3.png)


Nó đang thực hiện kiểm tra số sau phải lớn hơn số trước, dữ liệu được lấy từ `off_23C68` (nơi lưu các index được chọn), như vậy thì chuẩn với tính chất của Longest Increasing Subsequence (đây chỉ mới là phân tích siêu sơ sài, có gì tí nữa bạn kéo xuống mình sẽ nói kĩ hơn case này :>).
    
Hãy nhìn đoạn này ở case 7: 
![image](./4.png)

Đây là chốt chặn cuối cùng trước khi chương trình nhảy tới LABEL_29 (đoạn giải mã flag). Vậy `39577` này là cái gì? Đến đây mình buộc phải trace ngược lên biến `dword_28E64`
    
Mình đã tìm xem ở đâu gán giá trị cho `dword_28E64` và code đã dẫn mình về Case 12: 

![image](./5.png)
Hãy nhìn dòng này: 
```C
dword_28E64 = dword_28E60;
```

Tức là nếu điểm mới (E60) lớn hơn điểm cũ (E64) (vì chỗ này nó nằm ở nhánh ELSE mà :>), thì tiến hành cập nhật => Như vậy là `dword_28E64` đang lưu trữ một giá trị nào đó và giá trị này được lấy từ `dword_28E60`.
    
Rồi giờ đi trace ngược lại `dword_28E60` thôi, nó dẫn mình về case 10: 
![image](./6.png)

Hãy nhìn vào dòng này: 
```C
dword_28E60 = sub_2816((unsigned int)dword_28E24);
```

Như vậy là `sub_2816` được gọi sau khi ta đã chọn xong dãy số. Tiếp tục đi xem nó là cái gì nhé :skull: ||Cảnh báo nôn mửa, ai yếu bóng vía thì xem tới đây dc r =)))||

***
![image](./7.png)
![image](./8.png)
Có vẻ là hàm đã bị Obfuscate và IDA sẽ mặc định sẽ từ chối decompile các hàm quá lớn hoặc quá phức tạp để tránh bị treo
![image](./9.png)
Mình đã cố sửa `hexrays.cfg` để IDA có thể load ra nhưng có vẻ không được, thôi thì đi ngồi mò Graph View thôi :D 
    
Trước hết thì quay lại case 10 bên trên đã nhé, hãy nhìn vào những dòng này: 
![image](./10.png)

Mình đã add thêm comments cho dễ hiểu, như ta đã thấy thì, hàm `sub_2816` nhận vào số 20 => tới đây thì mình chắc chắn 99%, `sub_2816` là một hàm dùng để tính toán 1 cái gì đó. Vì sao á? Nếu thử động não và móc nối toàn bộ những gì đã phân tích từ nãy tới giờ, ta có thể vẽ ra được logic nó ntn: 
- Tại Case 10, hàm này được gọi với tham số là `dword_28E24` và nó xử lý 20 phần tử.
- Kết quả trả về được lưu vào `dword_28E60`.
- Ngay sau đó (tại Case 7), giá trị này (`dword_28E60` =>`dword_28E64`) được đem ra so sánh với `39577`. Nếu bằng = có giải mã đc file encrypt. 

Như vậy, 1 hàm nhận vào `dữ liệu đã chọn` và trả về một con số để quyết định thắng/thua => Chắc chắn nó đang tính toán cái gì đó
***    
Quay trở lại bài toán thì ta có input của hàm `sub_2816` là 20. Vấn đề là hàm này IDA không giải quyết được. Chuyển sang Graph View thì thấy luồng đi tỏa ra như mạng nhện, rất khó đọc bằng mắt thường. Ta sẽ đi giải quyết cái hàm này sau cùng.
    
Trước khi đi giải quyết hàm đấy thì có 1 câu hỏi khác làm mình stuck khá lâu, nếu đã nói đừng quan tâm phần `Generator`, chỉ quan tâm cái `Validator` thôi thì rốt cuộc case 4 & 7 nó đang valid cái gì? Và mình đã có câu trả lời cho cái này, đúng là mình không cần quan tâm nó `rand() % 5000 hay rand() * 10`, cũng chả cần quan tâm nó chạy bao nhiêu lần, seed là cái gì? Cái mình quan tâm là con số được sinh ra bằng cách nào, nó cũng phải được lưu vào đâu đó thì các case như case 4, case 7 mới có cái để mà check chứ?

Rồi mình đã thấy cầu nối, nó nằm ở ngay case 9: 
![image](./11.png)
Vậy `off_23C68` tạm thời là mảng chứa các index mà chương trình đã chọn. Thế thì lại thêm 1 câu hỏi nữa, chương trình chọn các chỉ số này để làm gì? Thế là lại đi để trở về, mình đã trace lại cái case 4 lúc nãy phân tích chưa xong toàn bộ: 
![image](./12.png)
Hãy nhìn dòng này: 

```C
if ( *((_DWORD *)off_23C68 + i) <= *((_DWORD *)off_23C68 + i - 1) ... ) 
//   ^ Index hiện tại             ^ Index trước đó
```

Như phân tích sơ sài lúc nãy, chỉ số chọn sau phải lớn hơn chỉ số chọn trước. Điều này đảm bảo ta đang chọn các phần tử theo thứ tự từ trái sang phải trong mảng gốc (đây là định nghĩa của Subsequence - Dãy con).
                                         
Phân tích tiếp vế thứ 2: 
```C
*((_DWORD *)off_23C78 + *((int *)off_23C68 + dword_28E24)) <= ...
```
Ta sẽ bóc tách nó từ trong ra ngoài, bình tĩnh phân tích thôi, đừng xợ :v 
Nhìn cái lõi trước: 
```C
*((int *)off_23C68 + dword_28E24)
```
Đây là `Indices[i]` (lấy index tại bước thứ `i`) - gọi nó là `idx_curr` đi cho dễ làm việc.

Rồi sau đấy nhìn cái vỏ: 
```C
*((_DWORD *)off_23C78 + idx_curr)
```
Đây là `Values[idx_curr]` - case 4 sẽ dùng chỉ số vừa lấy để truy cập mảng giá trị gốc.
    
Làm tương tự với vế phải (ứng với `i-1`), ta thu được: 
```C
Values[ Indices[i] ] <= Values[ Indices[i-1] ]
```

Rồi tổng hợp logic ta được gì? lệnh if trong case này có ý nghĩa là: Nếu `(Indices[i] <= Indices[i-1]) HOẶC (Values[Indices[i]] <= Values[Indices[i-1]])` Thì: FAIL (`dword_28E20 = 6`)
=> Muốn win thì phải ELSE: `Indices[i] > Indices[i-1]` (chọn chiều xuôi) & `Values[Indices[i]] > Values[Indices[i-1]]` (giá trị sau phải lớn hơn giá trị trước) 
=> Bingo, chuẩn định nghĩa của `LIS (Longest Increasing Subsequence)` chưa? :D

Sau khi vượt qua bài kiểm tra LIS ở case 4, chương trình nhảy tới case 10 để tính điểm, nếu bạn thắc mắc tại sao lại nhảy qua case 10, đơn giản là vì nó đi 1 trạm trung chuyển khác là case 5: 
![image](./13.png)

Hãy luôn nhớ ta đang thực hiện switch trên `dword_28E20` và đoạn cuối case 4 có cái này: 
![image](./14.png)
Nó đã cài sẵn trạm dừng chân tiếp theo là case 5 rồi :v 
    
Và hãy nhìn case 5 bên trên, chương trình đang giảm biến đếm (`--dword_28E24`):
- Nếu chưa đủ 20 số: Nó quay lại vòng lặp để kiểm tra tiếp
- Nếu đã đủ 20 số (count == 0): Nó chuyển trạng thái sang Case 10 (`dword_28E20 = 10`) để bắt đầu bước vào `sub_2816`.

***
Nãy giờ có 1 thứ vẫn chưa được làm sáng tỏ, đó là `sub_2816` nó làm cái gì? Mình biết chắc chắn nó là 1 hàm dùng để tính toán nhưng mình không thể chứng minh được 
![image](./15.png)

Và manh mối lớn nhất khiến mình thay đổi góc nhìn từ bài toán `LIS` đơn thuần sang bài toán `Optimization` chính là sự tồn tại của con số `39577` (I've been suffering from the pain of this chall since this point :cursed:).

Ý là nghe hơi quan điểm cá nhân và ngộ nhân nhưng nếu chỉ là `LIS`, tại sao không check độ dài??? (check cái input 20 chẳng hạn).
    
39577 là 1 số quá lớn để có thể là 1 độ dài => `sub_2816` phải thực hiện tính toán SỐ HỌC nào đó, có lẽ là rất phức tạp trên cái dãy đã chọn chứ.
    
Để chứng minh suy luận trên, mình soi vào code Assembly của hàm `sub_2816`. Dù code obfuscated, nhưng mình tìm thấy dấu hiệu đặc trưng của một vòng lặp tính tổng, ngay tại Prologue đã thấy dấu hiệu bất thường: 
![image](./16.png)
- `rdx`: Trỏ tới Indices (`off_23C68` - đã biết).

- `rax`: Trỏ tới 1 mảng bí ẩn chưa biết  (`off_23C70`).

Như vậy, hàm này nhận đầu vào là danh sách các chỉ số (`Indices`) chtrinh đã chọn, ngay lập tức, nó load thêm một mảng thứ 2 (`off_23C70`) song song với mảng `Indices`

Tiếp tục trace sâu hơn vào hàm này, bên trong vòng lặp (dù bị xé lẻ), mình thấy `pattern` này lặp đi lặp lại:

- Lấy `Index` từ `rdx`.

- Dùng `Index` đó để lấy giá trị từ `rax` (Mảng bí ẩn bên trên).

- Quan trọng nhất: Giá trị lấy ra từ mảng bí ẩn này không phải để so sánh, mà được dùng trong các lệnh tính toán cộng dồn tác động lên thanh ghi kết quả.
    
=> Đây là 1 hàm duyệt qua mảng, lấy giá trị từ một mảng thứ 2, cộng dồn/tính toán các giá trị đó, so sánh tổng cuối cùng với một đích đến (39577).

![image](./17.png)
Và bump, chính author đã confirm 
=> Đây chính xác là bài toán Maximum Sum Weight. Welcome to Mini VNOI :omegalul: 

***

`sub_2816` là 1 hàm bị Obfuscate nên ta sẽ ko dở hơi đi nhìn Graph View của nó làm gì cho mệt. Đối với các hàm bị Obfuscate, phần thân (loop) có thể bị xé lẻ ra 7749 hướng, nhưng các biến toàn cục (`Global Variables`) thường được load vào thanh ghi ngay ở đầu hàm (chỗ Prologue) để tối ưu hóa tốc độ truy cập trong vòng lặp. Ta sẽ tận dụng điều này để soi `Prologue` của hàm này OwO.
    
![image](./18.png)

Hãy nhìn kĩ 2 dòng này: 
![image](./19.png)

Thấy quen không? Ta đã biết `off_23C68` là con trỏ trỏ tới mảng Index (các index được chương trình chọn) từ phân tích ở hàm `main` bên trên. Ngay bên cạnh nó chương trình load thêm một con trỏ nữa vào thanh ghi `RAX`. Vì hàm này thực hiện tính toán dựa trên các Index đã chọn, nên con trỏ thứ hai này (`off_23C70`) chắc chắn phải trỏ tới Bảng điểm (`Weights Array`).

Mình nhanh tay check thử tham chiếu của `off_23C70`:

![image](./20.png)
Thấy gì chưa =))) 1 click dẫn mình tới cả 2 đích, trong IDA thì thấy `off_23C70` trỏ thẳng tới vùng dữ liệu `unk_1EE40` & tự nhiên ở đâu lòi ra thằng `off_23C78` trỏ tới `unk_1A020` nữa =))))
    
Nếu bạn quên `off_23C78` là gì rồi, bạn có thể kéo lên case 4 và xem thật kĩ lại nó là gì nhé :>
    
Vậy mình tìm hiểu được gì? Chương trình này sử dụng cùng một bộ Index (`off_23C68`) nhưng truy cập vào 2 mảng khác nhau cho 2 mục đích riêng biệt: 
- Mảng Values (`off_23C78` => `unk_1A020`): Dùng ở `Case 4` để kiểm tra điều kiện `LIS` (Số sau > Số trước).
- Mảng Weights (`off_23C70 => unk_1EE40`): Dùng ở `sub_2816` để tính Tổng điểm.
    
Bằng việc sử dụng IDAPython, mình đã có thể dễ dàng dump ra 2 mảng siêu to đó ra ngoài, script mình sử dụng dưới đây: 

```py
import ida_bytes
import ida_kernwin

ADDR_VALUES  = 0x1A020  # unk_1A020
ADDR_WEIGHTS = 0x1EE40  # unk_1EE40
COUNT        = 5000     # số lượng phần tử muốn dump

def get_dword_array(start_addr, count):
    res = []
    for i in range(count):
        # lấy dword
        val = ida_bytes.get_dword(start_addr + i * 4)
        res.append(val)
    return res

# dump values:
values = get_dword_array(ADDR_VALUES, COUNT)
print(f"vals_raw = {values}")

print("\n")

# dump weights:
weights = get_dword_array(ADDR_WEIGHTS, COUNT)
print(f"weights_raw = {weights}")

```
***
Bây giờ ta phải tổng hợp tất cả các sự liên kết giữa những dữ liệu tìm được, bản chất là ta vẫn đang đi tìm Key để decrypt, ta cần biết cách chương trình tạo key, và nó đã được tiết lộ ở case 12: 
![image](./21.png)


Case 12 tiến hành duyệt ngược như sau: cho 1 vòng lặp chạy từ `count - 1` về 0 (tức là từ `Index` thứ 19 về 0). Nếu thuật toán của mình tìm ra dãy index là [A, B, C...] (theo chiều xuôi của mảng gốc), thì Key sẽ được ghép theo thứ tự ngược lại: `...CBA.`

Xem sơ qua hàm `sub_15561` thử: ![image](./22.png)

Trông chả khác gì `std::to_string`, nó chỉ đơn giản biến giá trị số nguyên của Index (ví dụ: `123`) thành chuỗi ký tự `"123"`.

Và cuối cùng hàm `std::string::operator+=` nối liền các chuỗi số lại với nhau sao cho không có ký tự space.

Vậy là công thức tổng quát của key sẽ là: tìm dãy `Index`, đảo ngược, nối chuỗi, và hash `SHA256` để tạo ra `Key` giải mã `AES` => Okay viết 1 script với công thức z là được.

***

Sau khi đã có trong tay 2 mảng dữ liệu (`Values & Weights`) và mục tiêu (Tổng = 39577), mình hăm hở viết ngay một script quy hoạch động để tìm flag :v 
    
Ban đầu, mình dùng thuật toán DP Greedy: Tại mỗi bước, luôn chọn phần tử mang lại tổng lớn nhất => Kết quả là script chạy vèo cái là xong.

- Tổng: 39577 (Chuẩn).

- Độ dài: 20 (Chuẩn).

- Kết quả Decrypt: file PNG mở không lên, sai header của 1 file PNG :skull: 

Mình đã mất một lúc để nhận ra vấn đề: vấn đề là có lẽ nó có nhiều nghiệm? Có thể có hàng chục dãy số khác nhau cùng thỏa mãn điều kiện `LIS` và cùng có tổng trọng số là 39577 thì sao?

Để dễ hình dung thì nó sẽ ntn: 
- Tác giả (thông qua `rand()`) đã đi hướng A.

- Thuật toán DP của mình lại tìm ra hướng B => Dù tổng điểm bằng nhau, nhưng dãy Index (Key) khác nhau => Không decode được.
    
=> Giải pháp cứu cánh: Không thể dùng DP thường. Phải dùng Backtracking + DP để tìm TẤT CẢ các con đường có thể đạt tổng 39577. Sau đó thử Key với từng đường một :rose: 
***
Ơ tới đây thì mình chợt nhớ ra, AES-CBC cần 2 thứ: Key và IV. IV của mình đâu =))))))

Bình tĩnh xem lại hàm main, chắc là nó nằm trong `LABEL_29` (chỗ load cái file encrypt) thôi à. 
![image](./23.png)

Thay vì trace ngược biến `v6` cho đau đầu, mình mở tab Strings (`Shift+F12`) lên và tìm kiếm các chuỗi khả nghi nằm trong đống này, và rồi đập vào mắt là 1 dòng đúng bằng 32 kí tự :DDDD 
![image](./24.png)
Đ quan tâm, pick luôn, nó sẽ là IV của bài này =))) trust me bro.
    
***

Kết hợp tất cả lại, mình viết script cuối cùng với 3 ý tưởng chính: 
 - Dùng DP để build map, biết trước hướng nào sẽ dẫn đến tổng 39577 để tránh đi vào ngõ cụt.
 - `Backtracking`: Duyệt qua mọi chỗ để tìm tất cả các dãy `Index` thỏa mãn
 - `Brute-force Key`: Thử `decrypt` với từng dãy tìm được :rose:
    
Dưới đây là script mình đã sử dụng: 
```py
import hashlib
import binascii
from Crypto.Cipher import AES
from Crypto.Util.strxor import strxor
import sys

# tăng giới hạn đệ quy để backtrack
sys.setrecursionlimit(10000)

vals_raw = [ ... LẤY_CÁI_MẢNG_DUMP_ĐƯỢC_ZÔ_ĐÂY_:V ... ]
weights_raw = [ ... LẤY_CÁI_MẢNG_DUMP_ĐƯỢC_ZÔ_ĐÂY_:V ... ]

# chuẩn hóa input
vals = vals_raw 

weights = weights_raw


TARGET_SUM = 39567 
TARGET_LEN = 20

# Cắt dữ liệu
n = min(len(vals), len(weights))
vals = vals[:n]
weights = weights[:n]



# build dp
dp = [{} for _ in range(TARGET_LEN + 1)]
prevs = [{} for _ in range(TARGET_LEN + 1)]

# init layer 1
for i in range(n):
    dp[1][i] = weights[i]
    prevs[1][i] = []

# chạy xuôi
for k in range(2, TARGET_LEN + 1):
    for i in range(n):
        current_val = vals[i]
        current_w = weights[i]
        
        max_prev_sum = -1
        
        # b1: Tìm Max Sum từ layer k-1 có thể nối vào i
        for j in dp[k-1]:
            # Điều kiện nối: j < i và vals[j] < vals[i]
            if j < i and current_val > vals[j]:
                if dp[k-1][j] > max_prev_sum:
                    max_prev_sum = dp[k-1][j]
        
        # b2: Cập nhật dp và prevs nếu tìm được
        if max_prev_sum != -1:
            dp[k][i] = max_prev_sum + current_w
            prevs[k][i] = []
            for j in dp[k-1]:
                if j < i and current_val > vals[j]:
                    if dp[k-1][j] == max_prev_sum:
                        prevs[k][i].append(j)

# tìm các điểm kết hợp lí
end_nodes = []
for i, s in dp[TARGET_LEN].items():
    if s == TARGET_SUM:
        end_nodes.append(i)



if len(end_nodes) == 0:
    if len(dp[TARGET_LEN]) > 0:
        print(f"Max sum thực tế tìm được: {max(dp[TARGET_LEN].values())}")
    exit()

# backtracking lấy full path ở đây:
paths = []
def backtrack(k, current_idx, current_path):
    if k == 1:
        paths.append(list(current_path))
        return

    # duyệt qua tất cả các prevs hợp lệ
    if current_idx in prevs[k]:
        for prev_idx in prevs[k][current_idx]:
            # đệ quy
            current_path.append(prev_idx)
            backtrack(k-1, prev_idx, current_path)
            current_path.pop()

for end_node in end_nodes:
    backtrack(TARGET_LEN, end_node, [end_node])

# bruteforce test key với từng đường đi
PNG_HEADER = binascii.unhexlify("89504E470D0A1A0A0000000D49484452") #vì là file PNG nên ta biết thừa header

def check_key(key_str, path_idx):
    try:
        key_hash = hashlib.sha256(key_str.encode()).digest()
        
        # thử với IV deadbeef...
        iv = binascii.unhexlify("deadbeefdeadbeefdeadbeefdeadbeef")
        
        with open("flag_enc.dat", "rb") as f: ciphertext = f.read()
        cipher = AES.new(key_hash, AES.MODE_CBC, iv)
        pt = cipher.decrypt(ciphertext)
        
        if pt.startswith(b'\x89PNG'):
            with open(f"flag_win_{path_idx}.png", "wb") as f: f.write(pt)
            return True
    except: pass
    return False

for idx, p in enumerate(paths):
    # p đang là [End, ..., Start], reverse lại nếu cần
    # nhưng mà đây là code C++ chạy j-- (từ cuối về đầu), nên ta giữ nguyên thứ tự p
    # lúc này Key = Chuỗi các Index
    key_idx = "".join(str(i) for i in p)
    
    if check_key(key_idx, idx):
        break
    
    # backup: thử Reverse path
    key_rev = "".join(str(i) for i in p[::-1])
    if check_key(key_rev, idx):
        break

print("Fucking Done!.")
```

Chạy script này cùng 1 folder với folder `whoisluckier` download được từ BTC, đảm bảo bạn cài đủ các thư viện script đã sử dụng, ta sẽ thu được bức ảnh đã được decrypt [này](https://drive.google.com/file/d/1pe_jdWxNmbs0cfKjrtT_DjTcLn0UyYgE/view?usp=sharing). Vì ảnh lớn ~2MB nên không thể paste thẳng lên được, mong mn thông cảm.

***
Vậy ta thu được flag là: ***W1{Re_1s_n3V3r_b0r1nG_r1gh5}***
Có lẽ solution của mình không thật sự `intended` cho lắm, nhưng mình mong nó sẽ giúp các bạn có 1 cái nhìn tổng quan hơn cho bài này. 
    
*** 
Dự định sắp tới của mình có lẽ là sẽ hoàn thành toàn bộ những câu chưa làm được trong giải cũng như viết writeups đầy đủ về toàn bộ. I hope i wont die from pain before dat :clown_face: 

Chân thành cảm ơn CLB ATTT của UIT nói chung và anh Trần Hiếu (`lovely_boy10`) vì đã dành thời gian và công sức để tạo ra những challenge chất lượng ntn! Mong rằng trong tương lai sẽ còn có cơ hội trải nghiệm nhiều challenge hay đến từ `InsecLab` nữa OwO.


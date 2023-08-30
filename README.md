# 🖥admin 
<!--[admin_Goodde : https://admin.goodde.kr/login](https://admin.goodde.kr/login)
<br/><br/>
-->


## ✨위치 및 이미지 기반 웹 솔루션 - Back-end
```git
⚡ 2022.06 ~ 2022.12
```

&nbsp;&nbsp;&nbsp;<strong>📌 취약 이웃 위치 신고</strong> : 취약이웃(극빈층, 우울증 환자가족 등)을 인지한 주민들이 현재 위치와 사연 메시지를 쉽게 등록 <br/>
&nbsp;&nbsp;&nbsp;<strong>📌 재난 위험 사진 신고</strong> : 이웃 주변의 재난상황(수해, 산불 등)을 인지한 주민들이 사진과 긴급 상황 메시지를 쉽게 등록<br/>
<div align="center">
      <img src="https://user-images.githubusercontent.com/96722691/205233542-1217caa8-d3ae-444b-ac18-47785995518a.png"  width="300" >
</div>

## Using Stacks <br/>
```git
📌 NodeJS, Express, MYSQL, NCP SMS API
```
&nbsp;&nbsp;⭐ <strong>시스템 구성도 & ERD</strong> <br />
<div align="center">
      <img src="https://github.com/gooddeLink/admin/assets/101400650/4f973600-b175-4e98-a172-4484fac07791" width="600" >
      <p>[시스템 구성도]</p>
      <img src="https://github.com/gooddeLink/admin/assets/101400650/ebaf25a5-2e4e-4539-b7ac-72dd856d2905" width="600" >
      <p>[ERP]</p></br>
</div>
<br />

## 1. 📌 로그인 (/login)<br/>
: 해당 아이디로 로그인 진행
<p align="center"><img src="https://user-images.githubusercontent.com/101400650/205231365-8f0b0301-93b3-4f95-bde8-85bc14b8e0ea.png"  width="500" ></p>
<br/><br/>

## 2. 👨 user (/call_user)<br/>
&nbsp;&nbsp;&nbsp;: 고객 추가 및 고객 관리<br/>
<br/>
&nbsp;&nbsp;&nbsp; **1.** 모든 고객 정보(해당 company) 확인 가능
<p align="center"><img src="https://user-images.githubusercontent.com/101400650/205231657-ed68b949-99b1-43c0-a559-731bff2db127.png" ></p>
<br/>

&nbsp;&nbsp;&nbsp; **2.** 버튼"**+ create new**" 클릭 ➡ 고객(전화번호) 추가<br/>
<p align="center"><img src="https://user-images.githubusercontent.com/101400650/205236911-04b2c0e0-7426-4788-b542-ed19bdc436c4.png" width="500" ></p>
<br/>

&nbsp;&nbsp;&nbsp; **3.** 생성된 userID row 클릭 ➡ **edit** 창 노출(call_user/:id) ➡ 버튼"**send Message**" 클릭 ➡ 고객 **사용자페이지** 전송<br/>
&nbsp;&nbsp;&nbsp; ** **edit** 창에서 고객 정보 수정, 삭제 가능<br/>
<p align="center"><img src="https://user-images.githubusercontent.com/101400650/205231905-7f1a0cd5-841e-4f7b-b1fb-9df2d2fb3a3c.png" width="500" ></p>
<br/><br/>

## 3. 📍 Location(/call_loc)<br/>
&nbsp;&nbsp;&nbsp;: 고객이 "**취약 이웃 위치 신고**" 시 고객 정보 **Location**에 들어옴<br/>
<br/>
&nbsp;&nbsp;&nbsp; **1.** 모든 고객 정보(해당 company) 확인 가능<br/>
<p align="center"><img src="https://user-images.githubusercontent.com/101400650/205234501-ea5636d2-6935-4584-9faf-7820386f8dec.png" ></p>
<br/>

&nbsp;&nbsp;&nbsp; **2.** userID row 클릭 -> **edit** 창 노출(call_loc/:id) ➡ 고객 정보 확인 가능<br/>
&nbsp;&nbsp;&nbsp; ** **edit** 창에서 고객 정보 수정, 삭제 가능<br/>
<p align="center"><img src="https://user-images.githubusercontent.com/101400650/205237211-b1eb6cea-15c3-41e1-a1c5-6fea2cf781d1.png" width="500"></p>
<br/>
     
## 4. 📸 Camera(/call_cam)<br>
&nbsp;&nbsp;&nbsp;: 고객이 "**재난 위험 사진 신고**" 시 고객 정보 **Camera**에 들어옴<br/>
<br/>
&nbsp;&nbsp;&nbsp; **1.** 모든 고객 정보(해당 company) 확인 가능<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/101400650/205233912-b51493f9-0e49-44f8-b219-2f6c7db6f4b8.png" ></p>
<br/>

&nbsp;&nbsp;&nbsp; **2.** userID row 클릭 ➡ **edit** 창 노출(call_loc/:id) <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➧ **a.** 고객 정보 확인 가능<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➧ **b.** 유형벌 솔루션 전송 기능:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;버튼"**send Message(유형별 솔루션)**" 클릭 ➡ 고객에게 **해당 재난유형에 맞는 대피요령(국민재난안전포털)** 전송<br/>
&nbsp;&nbsp;&nbsp;** **edit** 창에서 고객 정보 수정, 삭제 가능<br/>
<p align="center"><img src="https://user-images.githubusercontent.com/101400650/205240014-240dd8cf-9872-4043-a90e-f7e601c5e616.png" width="500" ></p>
<br/>

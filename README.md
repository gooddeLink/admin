# admin

## 1. 로그인 (/login)<br/>
: <span style='color: red'>해당 아이디로 로그인 진행</span><br/>

## 2. user (/call_user)<br/>
&nbsp;&nbsp;&nbsp;-1. 모든 고객 정보(해당 company) 확인 가능<br/>
&nbsp;&nbsp;&nbsp;-2. 버튼"**+ create new**" 클릭 -> 고객(전화번호) 추가<br/>
&nbsp;&nbsp;&nbsp;-3. 생성된 userID row 클릭 -> **edit** 창 노출(call_user/:id) -> 버튼"**send Message**" 클릭 -> 고객 **사용자페이지** 전송<br/>
&nbsp;&nbsp;&nbsp;****edit** 창에서 고객 정보 수정, 삭제 가능<br/>

## 3. Location(/call_loc)<br/>
&nbsp;&nbsp;&nbsp;: 고객이 "**취약 이웃 위치 신고**" 시 고객 정보 **Location**에 들어옴<br/>
&nbsp;&nbsp;&nbsp;-1. 모든 고객 정보(해당 company) 확인 가능<br/>
&nbsp;&nbsp;&nbsp;-2. userID row 클릭 -> **edit** 창 노출(call_loc/:id) -> 고객 정보 확인 가능<br/>
&nbsp;&nbsp;&nbsp;****edit** 창에서 고객 정보 수정, 삭제 가능<br/>
      
## 4. Camera(/call_cam)<br>
&nbsp;&nbsp;&nbsp;: 고객이 "**재난 위험 사진 신고**" 시 고객 정보 **Camera**에 들어옴<br/>
&nbsp;&nbsp;&nbsp;-1. 모든 고객 정보(해당 company) 확인 가능<br/>
&nbsp;&nbsp;&nbsp;-2. userID row 클릭 -> **edit** 창 노출(call_loc/:id) <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> a. 고객 정보 확인 가능<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> b. 유형벌 솔루션 전송 기능:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;버튼"**send Message(유형별 솔루션)**" 클릭 -> 고객에게 **해당 재난유형에 맞는 대피요령(국민재난안전포털)** 전송<br/>
&nbsp;&nbsp;&nbsp;****edit** 창에서 고객 정보 수정, 삭제 가능<br/>


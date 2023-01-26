# 카카오톡 로그인 구현 (with typescript)

1. 유저가 로그인 버튼을 클릭한다.

2. 카카오톡 로그인 동의 페이지로 이동한다.

3. 동의 후 확인 버튼을 클릭하면 리다이렉트 URI로 이동한다.

4. 리다이렉트 URI에 포함된 CODE를 추출한다.

5. 추출한 CODE를 리퀘스트 파라미터에 넣어 카카오서버에 토큰을 요청한다.

6. 받아온 토큰을 로컬스토리지에 저장 후 유저페이지로 이동한다.

7. 저장한 토큰으로 유저 정보를 불러온다.
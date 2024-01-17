<script>
  // 스크립트 태그 내에서 필요한 데이터나 메소드를 정의합니다.
</script>

<div class="page-container">
  <div class="login-form">
    <h3>회원가입</h3>
    <input type="text" placeholder="아이디" />
    <input type="text" placeholder="닉네임" />
    <input type="text" placeholder="나이" />
    <input type="text" placeholder="키" />
    <input type="text" placeholder="몸무게" />
    <select>
      <option>포지션</option>
      <!-- 여기에 추가 옵션을 넣을 수 있습니다 -->
    </select>
    <input type="password" placeholder="비밀번호" />
    <input type="text" placeholder="비밀번호 확인" />
    <button>가입완료</button>
  </div>
</div>

<style>
  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* 전체 높이 */
    background-color: #f5f5f5; /* 배경색 맞춤 */
  }

  .login-form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white; /* 로그인 폼 배경색 */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
    border-radius: 8px; /* 모서리 둥글게 */
  }

  input,
  select,
  button {
    margin-bottom: 10px; /* 요소들 사이의 간격 */
    padding: 10px;
    border: 1px solid #ddd; /* 테두리 색상 */
    border-radius: 4px; /* 입력 필드 모서리 둥글게 */
  }
</style>

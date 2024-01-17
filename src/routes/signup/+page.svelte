<script>
  import HorizontalAlign from "$lib/components/HorizontalAlign.svelte";
  function goToLogin() {
    window.location.href = "/";
  }
</script>

<div class="page-container">
  <form method="post" class="login-form">
    <h3>회원가입</h3>
    <input type="text" placeholder="아이디" name="email" />
    <input type="text" placeholder="닉네임" name="nickname" />
    <HorizontalAlign>
      <input type="text" placeholder="나이" name="age" />
      <input type="text" placeholder="키" name="height" />
      <input type="text" placeholder="몸무게" name="weight" />
    </HorizontalAlign>
    <select>
      <option>포지션</option>
      <!-- 여기에 추가 옵션을 넣을 수 있습니다 -->
    </select>
    <input type="password" placeholder="비밀번호" name="password" />
    <input type="text" placeholder="비밀번호 확인" name="passwordConfirm" />
    <button type="submit">가입완료</button>
  </form>
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
    width: 400px; /* 폼의 너비를 설정합니다. */
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

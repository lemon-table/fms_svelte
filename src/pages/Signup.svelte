<script>
  import { Position } from "../enums/position.enum";
  // Enum values for the dropdown
  let positionOptions = Object.values(Position);
</script>
<div class="page-container">
  <div class="login-form">
    <h3>회원가입</h3>
    <input type="text" bind:value={signUpData.name} placeholder="아이디" />
    <input type="text" bind:value={signUpData.email} placeholder="이메일" />
    <input type="number" bind:value={signUpData.age} placeholder="나이" />
    <input type="number" bind:value={signUpData.height} placeholder="키" />
    <input type="number" bind:value={signUpData.weight} placeholder="몸무게" />

    <select bind:value={signUpData.position}>
      <option disabled value="">포지션 선택</option>
      {#each positionOptions as positionOption}
        <option value={positionOption}>{positionOption}</option>
      {/each}
    </select>

    <input type="password" bind:value={signUpData.password} placeholder="비밀번호" />
    <input type="password" bind:value={signUpData.passwordConfirm} placeholder="비밀번호 확인" />
    <form action="/signUp" method="post">
    <button on:click={signUp}>가입완료</button>
  </form>
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

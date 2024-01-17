<script>
  import HorizontalAlign from "$lib/components/HorizontalAlign.svelte";
  import SignUpForm from './signUp.svelte';
  import { Position } from '/src/enums/position.enum';

  // Function to get position options
  function getPositionOptions() {
    return Object.values(Position);
  }

  export let signUpData = {
    name: "",
    password: "",
    passwordConfirm: "",
    email: "",
    weight: 0,
    height: 0,
    age: 0,
    position: "",
  };
  
  export async function signUp() {
    try {
      // Validate input fields before proceeding
      if (
        !signUpData.email ||
        !signUpData.name ||
        signUpData.age <= 0 ||
        signUpData.height <= 0 ||
        signUpData.weight <= 0 ||
        !signUpData.password ||
        !signUpData.passwordConfirm ||
        !signUpData.position
      ) {
        alert("모든 필드를 채워주세요.");
        return;
      }
  
      // Check if passwords match
      if (signUpData.password !== signUpData.passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
  
      console.log("api start");
  
      // 중복되지 않은 경우 회원가입 진행
      const signUpResponse = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });
  
      console.log("api called");
  
      if (!signUpResponse.ok) {
        throw new Error("회원가입에 실패했습니다.");
      }
  
      const data = await signUpResponse.json();
      console.log("회원가입 성공:", data);
    } catch (error) {
      console.error(error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  }
  

</script>
<div class="page-container">
  <div class="login-form">
    <h3>회원가입</h3>

    <!-- SignUpForm을 사용하면서 signUp 함수를 전달. -->
  <SignUpForm bind:signUpData={$signUpData} bind:signUp={$signUp} />

    <input type="text" id="email" placeholder="이메일" />
    <input type="text" id="name" placeholder="이름" />
    <HorizontalAlign>
      <input type="text" id="age" placeholder="나이" />
      <input type="text" id="height" placeholder="키" />
      <input type="text" id="weight" placeholder="몸무게" />
    </HorizontalAlign>
    <select>
      <option disabled value="">포지션 선택</option>
      {#each getPositionOptions() as positionOption}
        <option value={positionOption}>{positionOption}</option>
      {/each}
    </select>
    <input type="password" placeholder="비밀번호" />
    <input type="text" placeholder="비밀번호 확인" />
    <button on:click={signUp}>가입완료</button>
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

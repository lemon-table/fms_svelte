<script context="module">
  import { handle } from '$lib/server';
  import { signUp } from './+page.server';

  export const post = handle(signUp);
</script>

<script>
  let signUpData = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  async function handleSubmit() {
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      console.log('Signup successful:', data);
    } catch (error) {
      console.error(error);
      alert('Signup failed. Please try again.');
    }
  }
</script>

<div class="page-container">
  <div class="login-form">
    <h3>회원가입</h3>
    <input type="text" bind:value={signUpData.username} placeholder="아이디" />
    <input type="text" bind:value={signUpData.email} placeholder="이메일" />
    <input type="password" bind:value={signUpData.password} placeholder="비밀번호" />
    <input type="password" bind:value={signUpData.passwordConfirm} placeholder="비밀번호 확인" />
    <button on:click={handleSubmit}>가입완료</button>
  </div>
</div>

<style>
  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 400px;
  }

  input, button {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  h3 {
    margin-bottom: 20px;
  }
</style>

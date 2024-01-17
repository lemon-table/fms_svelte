<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
  
    let signInData = {
      email: '',
      password: '',
    };
    let verificationCode = '';
    let sentVerificationCode = false;
  
    onMount(async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
  
        const userData = await response.json();
        signInData.email = userData.email;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    });
  
async function signIn() {
    try {
      const response = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
        credentials: "include", // CORS 정책
      });

      const data = await response.json();

      if (response.ok) {
        // 로그인 성공 시 메인 페이지로 이동하면서 서버로부터 받은 쿠키를 저장
        document.cookie = `accessToken=${data.accessToken}; domain=localhost; path=/; secure;`;

        // 메인 페이지로 이동합니다.
        navigate("/");
      } else {
        console.error("Sign In Response:", data);
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }

  async function kakaoSignIn() {
    try {
      const response = await fetch("http://localhost:3000/api/auth/kakao", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // CORS 정책
      });

      const data = await response.json();

      if (response.ok) {
        // 로그인 성공 시 메인 페이지로 이동하면서 서버로부터 받은 쿠키를 저장
        document.cookie = `accessToken=${data.accessToken}; domain=localhost; path=/; secure;`;

        // 메인 페이지로 이동합니다.
        navigate("/");
      } else {
        console.error("Sign In Response:", data);
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }
  async function sendVerificationCode() {
    console.log('Verification code sent:', verificationCode);
    sentVerificationCode = true; 
  }

  async function confirmVerificationCode() {
    console.log('Verification code confirmed:', verificationCode);
  }
</script>
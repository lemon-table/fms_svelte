<script>
    import HorizontalAlign from "$lib/components/HorizontalAlign.svelte";
  
    function goToSignup() {
      window.location.href = "/signup";
    }
  
    function goToHome() {
      window.location.href = "/home";
    }
  </script>
  
  <div class="page-container">
    <div class="login-form">
      <!-- 여기에 로그인 폼의 HTML 마크업을 추가합니다. -->
      <img src="src/img/fms_logo.png" alt="로고" width="200" height="200" />
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <HorizontalAlign>
        <button class="contrast outline" on:click={goToHome}>로그인</button>
        <button class="contrast outline" on:click={goToSignup}>회원가입</button>
      </HorizontalAlign>
      <img
        src="src/img/kakao_login_image.png"
        style="cursor: pointer;"
        alt="카카오 로그인"
        width="100%"
      />
    </div>
  </div>
  
  <style>
    /* 전체 페이지 레이아웃을 위한 스타일 */
  
    .page-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; /* 전체 뷰포트 높이 */
      background-color: #f0f0f0; /* 배경색은 이미지에서 추출한 색상 코드로 대체 */
    }
  
    .login-form {
      background-color: #ffffff; /* 배경색은 와이어프레임에서 추출한 색상 코드로 설정합니다. */
      padding: 1.5rem; /* 내부 여백을 설정합니다. */
      border-radius: 10px; /* 모서리를 둥글게 합니다. */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과를 추가합니다. */
      display: flex; /* Flexbox 레이아웃을 사용합니다. */
      flex-direction: column; /* 요소들을 세로로 쌓습니다. */
      align-items: center; /* 가로 축에서 중앙 정렬합니다. */
      gap: 0.5rem; /* 요소들 사이의 간격을 설정합니다. */
      width: 400px; /* 폼의 너비를 설정합니다. */
    }
  </style>
  
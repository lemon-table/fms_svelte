<script>

  let count = 0; // 알림 카운트를 위한 변수 초기화

  // '알림 로고' 클릭 이벤트 핸들러
  function incrementNotification() {
    const notificationCounter = document.getElementById('notificationCounter');
    count++; // 카운트 증가
    notificationCounter.textContent = count; // 화면에 카운트 업데이트
    notificationCounter.style.display = 'block'; // 숫자를 보여줍니다
    notificationCounter.style.padding = count<10?'2px 9px':'2px 5px';
  }

  // '프로필 보기' 버튼을 클릭했을 때 실행될 함수
  function showProfile() {
    window.location.href = "/profile";
  }
</script>

<div class="page-container">
  <div class="menu">
    <p><a href="/home">HOME</a></p>
    <p><a href="/team">TEAM</a></p>
    <p><a href="/player">PLAYER</a></p>
    <p><a href="/strategy">STRATEGY</a></p>
  </div>
  <div class="card">
    <h2><a href="/home">Football Management System (FMS) ⚽🔥</a></h2>
    <div class="profile-logo">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="notification-bell" on:click={incrementNotification}>
        <img src="src/img/bell.png" alt="알림 로고">
        <div id="notificationCounter" class="notification-counter">0</div>
      </div>
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        src="src/img/profile.png"
        alt="프로필 로고"
        on:click={showProfile}
      />
    </div>
    <slot />
  </div>
</div>

<style>
  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5; /* 배경색 설정 */
    gap: 0.5rem; /* 요소들 사이의 간격을 설정합니다. */
  }
  .menu {
    width: 10%; /* 또는 원하는 너비 */
    height: 90%; /* 또는 원하는 너비 */
    background-color: white;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
    border-radius: 10px; /* 모서리 둥글기 */
    text-align: center; /* 텍스트 중앙 정렬 */

    /* 기존 스타일은 유지하고, 여기에 추가합니다. */
    display: flex;
    flex-direction: column;
    align-items: center; /* 수직 축 중앙 정렬 */
  }

  .menu p {
    margin: 0.5rem 0; /* 위아래 마진을 줄입니다. */
    font-size: 0.9rem; /* 원하는 글씨 크기로 설정합니다. */
    cursor: pointer;
    /* 필요한 경우 추가 스타일링을 여기에 작성합니다. */
  }

  .card {
    width: 80%; /* 또는 원하는 너비 */
    height: 90%; /* 또는 원하는 너비 */
    background-color: white;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
    border-radius: 10px; /* 모서리 둥글기 */
    text-align: center; /* 텍스트 중앙 정렬 */

    /* 기존 스타일은 유지하고, 여기에 추가합니다. */
    display: flex;
    flex-direction: column;
    align-items: center; /* 수직 축 중앙 정렬 */
  }

  .profile-logo {
    position: absolute;
    top: 6%; /* .card의 상단과 맞춤 */
    right: 6%; /* .card의 오른쪽 끝과 맞춤 */
    display: flex; /* 이미지들을 가로로 나열 */
    gap: 13px; /* 이미지 사이의 간격 */
  }

  .profile-logo img {
    width: 40px; /* 로고 크기 */
    height: auto; /* 이미지 비율 유지 */
    border-radius: 50%; /* 원형으로 만들기 위해 */
    cursor: pointer;
  }

  .notification-bell {
    position: relative;
    cursor: pointer;
  }

  .notification-counter {
    position: absolute;
    top: -10px; /* 적절한 위치 조정 */
    right: -10px; /* 적절한 위치 조정 */
    background-color: red;
    color: white;
    border-radius: 50%;
    font-size: 0.8rem;
    display: none; /* 처음에는 숨겨둡니다 */
  }

  a {
    color: #445664; /* 기본 색상을 검정색으로 설정 */
    text-decoration: none; /* 기본적으로 밑줄 제거 */
  }

  a:hover {
    text-decoration: none; /* 마우스 오버 시 밑줄 제거 */
  }
</style>

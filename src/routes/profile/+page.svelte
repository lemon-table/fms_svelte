<script>
    import PageLayout from "../../pages/PageLayout.svelte";
    import HorizontalAlign from "../../lib/components/HorizontalAlign.svelte"
</script>
  
<PageLayout>
    <h3>프로필 페이지</h3>
    <div class="profile-container">
        <HorizontalAlign>
            <div class="profile-image">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <img
                src="src/img/bell.png"
                alt="알림 로고"
                on:click={() => alert("알림 로고 클릭되었습니다.")}
              />
              <button>프로필 수정</button>
            </div>
            
            <form>
                <HorizontalAlign>
                    <div class="form-group">
                        <label for="id">아이디</label>
                        <input type="text" id="id" name="id">
                    </div>
                    <div class="form-group">
                        <label for="nickname">닉네임</label>
                        <input type="text" id="nickname" name="nickname">
                    </div>
                    <div class="form-group">
                        <label for="category">포지션</label>
                        <select id="category" name="category">
                          <option value="option1">옵션1</option>
                          <option value="option2">옵션2</option>
                          <!-- 기타 옵션 추가 -->
                        </select>
                    </div>
                </HorizontalAlign>
                <HorizontalAlign>
                    <div class="form-group">
                        <label for="age">나이</label>
                        <input type="text" id="age" name="age">
                    </div>
                    <div class="form-group">
                        <label for="height">키</label>
                        <input type="text" id="height" name="height">
                    </div>
                    <div class="form-group">
                        <label for="weight">몸무게</label>
                        <input type="text" id="weight" name="weight">
                    </div>
                </HorizontalAlign>
                <HorizontalAlign>
                    <div class="form-group">
                        <label for="password">비밀번호</label>
                        <input type="password" id="password" name="password">
                    </div>
                    <div class="form-group">
                        <label for="details">비밀번호 확인</label>
                        <input type="password" id="passwordConfirm" name="passwordConfirm">
                    </div>
                </HorizontalAlign>
                <button type="submit">수정</button>
            </form>
        </HorizontalAlign>
      </div>
</PageLayout>
  
<style>
    /* 여기에는 CSS 스타일을 작성합니다. */
    .profile-container {
      border: 1px solid #dad5d5; /* 이미지 테두리 */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
      padding: 10px;
      width:90%;
      height: 70%;
      overflow: auto;
    }
  
    .profile-image {
      display: block;
      margin: 0px auto 20px; /* 이미지 위치 중앙 정렬 */
      width: 28%; /* 이미지 크기 */
      height: 28%;
      background-color: #ffffff; /* 이미지 배경색 */
      border-radius: 50%; /* 원형 이미지 */
    }

    .profile-image button {
        /* 프로필 이미지 바로 아래 버튼에 적용될 스타일 */
        display: block;
        width: auto; /* 버튼의 너비를 자동으로 설정 */
        margin: 10px auto; /* 위 아래 10px, 좌우 마진으로 중앙 정렬 */
        padding: 10px 20px; /* 패딩 설정 */
    }

    form{
        width: 60%;
        overflow: auto; /* 넘치는 내용에 대해 스크롤바를 표시합니다 */
        max-width: 100%; /* form의 최대 너비를 설정하여 바깥으로 넘치지 않도록 합니다 */
        margin: auto; /* 폼을 중앙에 위치시킵니다 */
    }
  
    .form-group {
      margin-bottom: 5px;
      
    }

    .form-group label {
      text-align: left;
    }
  
    input[type="text"] {
      width: 100%;
      padding: 8px;
      margin: 4px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
  
    button {
      width: 100%;
      height: 15%;
      background-color: #4CAF50;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    button:hover {
    background-color: #45a049;
    }
  </style>

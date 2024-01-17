<h3>속한 팀이 없습니다.</h3>
<p>팀을 생생하거나 팀에 참가해주세요!.</p>
<button on:click={() => alert("팀 생성이 클릭되었습니다.")}>팀 생성</button>
<button on:click={() => alert("팀 참가하기가 클릭되었습니다.")}>팀 참가하기</button> 

<style>
    button {
      width: 80%; /* 버튼 너비 */
      padding: 1rem;
      margin-top: 1rem; /* 버튼 상단 여백 */
      border: none;
      border-radius: 20px; /* 버튼 모서리 둥글기 */
      background-color: #333; /* 버튼 배경색 */
      color: white;
      font-size: 1rem;
      cursor: pointer; /* 마우스 오버 시 손가락 모양 */
      align-items: center; /* 가로 축에서 중앙 정렬합니다. */
    }
  
    button:hover {
      background-color: #555; /* 마우스 오버 시 버
        튼 색상 변경 */
    }
  
    /* 추가적인 스타일링이 필요한 경우 여기에 작성합니다. */
  </style>
<div class="horizontal-align">
    <slot />
  </div>
  
  <style>
    .horizontal-align {
      width: 100%; /* 인풋 필드의 너비를 폼에 맞춥니다. */
      display: flex;
      gap: 10px; /* 컴포넌트들 사이의 간격을 10px로 설정 */
    }
  </style>
  
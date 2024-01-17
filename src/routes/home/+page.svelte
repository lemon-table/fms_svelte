<script>
    import { writable } from 'svelte/store';
    import PageLayout from "../../pages/PageLayout.svelte";
    import CreateTeam from '../../pages/CreateTeam.svelte';
    import { goto } from '$app/navigation';

  // 현재 보여주고자 하는 컴포넌트를 저장하는 상태 변수
  const currentComponent = writable(CreateTeam);

  // '프로필 보기' 버튼을 클릭했을 때 실행될 함수
  function showProfile() {
    currentComponent.set('');
  }
  
  </script>
  
  <PageLayout>
    <svelte:component this={$currentComponent} />
  </PageLayout>

  
function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(audio);
    // console.log(key);
    if(!audio)return; //querySelector로 불러온 값이 존재하지 않으면 null 처리(이 부분 처리해두는 것은 중요)
    audio.currentTime = 0; //오디오 파일을 시작 지점으로 되돌려 놓는 부분
    audio.play();
    key.classList.add('playing'); //keydown 이벤트 시 효과를 위해 playing class를 추가
    // alert(key.className);
    console.log(e);
  }

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(element => element.addEventListener('transitionend',removeTransition));

  window.addEventListener('keydown',playAudio);
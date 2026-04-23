import grabitationalBeep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(grabitationalBeep);
  audio.play();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(e => console.log('Erro ao tocar auido', e));
  };
}

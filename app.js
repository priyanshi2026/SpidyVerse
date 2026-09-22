// Js use for audio


 window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-audio');
    audio.volume = 0.3; // Set volume to 30%

    // Wait for user interaction before playing (avoids autoplay block)
    document.body.addEventListener('click', () => {
      audio.play();
    }, { once: true });
  });

  
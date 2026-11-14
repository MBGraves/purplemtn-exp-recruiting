(() => {
  const nodes = document.querySelectorAll(".reveal");
  if (nodes.length) {
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((el) => el.classList.add("is-in"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
      );

      nodes.forEach((el) => observer.observe(el));
    }
  }

  const media = document.querySelector(".hero-media");
  const video = document.querySelector(".hero-video");
  if (!media || !video) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const markPlaying = () => media.classList.add("is-playing");
  const stopVideo = () => {
    video.pause();
    media.classList.remove("is-playing");
  };

  const tryPlay = () => {
    if (reduceMotion.matches) {
      stopVideo();
      return;
    }
    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.then === "function") {
      playAttempt.then(markPlaying).catch(() => {
        media.classList.remove("is-playing");
      });
    } else if (!video.paused) {
      markPlaying();
    }
  };

  video.addEventListener("playing", markPlaying);
  reduceMotion.addEventListener("change", tryPlay);
  tryPlay();
})();

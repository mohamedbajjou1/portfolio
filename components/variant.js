export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0, // add opacity property to hidden state
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1, // scale up to 100% in show state
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

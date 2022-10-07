import { useEffect, useState } from "react";

const useIntersection = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  let footer;

  const intersectElement = () => {
    footer = document.getElementById(`footer`);

    // Intersection Observer API
    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting((prevState) => !prevState);
        }
      });
    };

    let options = {
      root: null,
      rootMargin: "0px 0px 100px 0px", // we set a rootMargin to make sure that the that the images loads before the user reaches the footer
      threshold: 0.4,
    };
    let observer = new IntersectionObserver(intersectionCallback, options);

    observer.observe(footer);
  };

  useEffect(() => {
    window.addEventListener("load", intersectElement);
  }, []);

  ////////////////////////////////////
  return { isIntersecting };
};

export default useIntersection;

import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import "../styles/LocomotiveScroll.css"; // Import the CSS

export const Gallery1 = () => {
  useEffect(() => {
    const scroll = new Gallery1({
      el: document.querySelector(".scroll-animations-example"),
      direction: "horizontal",
      smooth: true,
      lerp: 0.05,
      tablet: {
        smooth: true,
      },
      smartphone: {
        smooth: true,
      },
    });

    const images = document.querySelectorAll(".image");

    const showImages = () => {
      images.forEach((image) => {
        image.classList.remove("-clicked");
        image.classList.add("-active");
      });
    };

    const hideImages = () => {
      images.forEach((image) => {
        image.classList.remove("-active");
      });
      setTimeout(showImages, 2000);
    };

    images.forEach((image) => {
      image.addEventListener("click", () => {
        image.classList.add("-clicked");
        hideImages();
      });
    });

    setTimeout(showImages, 1000);

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-animations-example" data-scroll-container>
        <div className="scrollsection" data-scroll-section>
          <div className="item -normal" data-scroll data-scroll-speed="2">
            <img className="image" src="https://picsum.photos/id/1005/300/400" alt="Image" />
          </div>
          <div className="item -big" data-scroll data-scroll-speed="1">
            <img className="image" src="https://picsum.photos/id/1019/600/800" alt="Image" />
          </div>
          <div className="item -small -horizontal" data-scroll data-scroll-speed="4">
            <img className="image" src="https://picsum.photos/id/1027/400/300" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};
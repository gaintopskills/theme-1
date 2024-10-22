import { useRef } from "react";

export const CoolGallery = () => {
  const galleryRef = useRef(null);

  const scrollNext = () => {
    galleryRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    galleryRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  return (
    <div className="gallery-wrapper">
      <h1 className="gallery-title">Sample Of Our Work</h1>
      <div className="gallery-container">
        <div className="gallery" ref={galleryRef}>
          <div className="card">
            <img src="https://picsum.photos/id/1/300/400" alt="Image 1" />
          </div>
          <div className="card">
            <img src="https://picsum.photos/id/2/300/400" alt="Image 2" />
          </div>
          <div className="card">
            <img src="https://picsum.photos/id/3/300/400" alt="Image 3" />
          </div>
          <div className="card">
            <img src="https://picsum.photos/id/4/300/400" alt="Image 4" />
          </div>
          <div className="card">
            <img src="https://picsum.photos/id/5/300/400" alt="Image 5" />
          </div>
        </div>

        <div className="controls">
          <button onClick={scrollPrev} className="prev-btn">
            Prev
          </button>
          <button onClick={scrollNext} className="next-btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
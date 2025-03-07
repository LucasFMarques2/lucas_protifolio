// Projects.jsx
import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import { ProjectsContainer } from "./styles";

export function Projects() {
  const glideRef = useRef(null);

  useEffect(() => {
    if (glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: "carousel",
        focusAt: "center",
        perView: 3,
        startAt: 1,
        gap: 10,
        animationDuration: 500,
        peek: { before: 50, after: 50 } // Ajuste para visualização parcial dos slides laterais
      });

      glide.on("mount.after", () => {
        document.querySelectorAll('.glide__slide').forEach((slide, index) => {
          if (index === glide.index) {
            slide.classList.add('glide__slide--active');
          } else if (index === glide.index - 1 || (glide.index === 0 && index === 4)) {
            slide.classList.add('glide__slide--prev');
          } else if (index === glide.index + 1 || (glide.index === 4 && index === 0)) {
            slide.classList.add('glide__slide--next');
          }
        });
      });

      glide.on("run.after", () => {
        document.querySelectorAll('.glide__slide').forEach(slide => {
          slide.classList.remove(
            'glide__slide--active',
            'glide__slide--prev',
            'glide__slide--next'
          );
        });

        const slides = document.querySelectorAll('.glide__slide');
        slides.forEach((slide, index) => {
          if (index === glide.index) {
            slide.classList.add('glide__slide--active');
          } else if (index === (glide.index - 1 + slides.length) % slides.length) {
            slide.classList.add('glide__slide--prev');
          } else if (index === (glide.index + 1) % slides.length) {
            slide.classList.add('glide__slide--next');
          }
        });
      });

      glide.mount();

      return () => glide.destroy();
    }
  }, []);

  return (
    <ProjectsContainer>
      <div className="glide" ref={glideRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">Slide 1</li>
            <li className="glide__slide">Slide 2</li>
            <li className="glide__slide">Slide 3</li>
            <li className="glide__slide">Slide 4</li>
            <li className="glide__slide">Slide 5</li>
          </ul>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
            ❮
          </button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
            ❯
          </button>
        </div>
      </div>
    </ProjectsContainer>
  );
}
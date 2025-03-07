// styles.js
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  max-width: 800px;
  margin: auto;
  perspective: 1000px; /* Perspectiva aplicada no container pai */

  .glide__slides {
    display: flex;
    transform-style: preserve-3d; /* Mantém o contexto 3D */
    padding: 20px 0;
  }

  .glide__slide {
    background: black;
    color: white;
    font-size: 24px;
    text-align: center;
    line-height: 200px;
    height: 200px;
    width: 250px;
    margin: 0 10px;
    transition: transform 0.5s ease;
    transform-origin: center center;
    position: relative; /* Necessário para z-index funcionar */
    flex-shrink: 0; /* Evita que os slides encolham */

    /* Sobrescreve transformações inline do Glide */
    &[style] {
      transform: none !important;
    }
  }

  .glide__slide--active {
    transform: scale(1) translateZ(0);
    z-index: 2;
  }

  .glide__slide--prev {
    transform: scale(0.9) rotateY(20deg) translateZ(-100px);
    opacity: 0.8;
    z-index: 1;
  }

  .glide__slide--next {
    transform: scale(0.9) rotateY(-20deg) translateZ(-100px);
    opacity: 0.8;
    z-index: 1;
  }

  .glide__arrow {
    background: white;
    color: black;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 18px;
    margin: 0 5px;
  }
`;
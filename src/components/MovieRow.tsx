import { useRef } from "react";
import "./MovieRow.css";

interface MovieRowProps {
  title: string;
  items: string[];
}

export default function MovieRow({ title, items }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="movie-row-container">
      <h2>{title}</h2>
      <div className="movie-row-wrapper">
        <div className="movie-row-left" onClick={() => handleScroll("left")}>
          <span>〈</span>
        </div>
        <div className="movie-row-list" ref={rowRef}>
          {items.map((item, index) => (
            <div key={index} className="movie-row-item">
              <img src={item} alt={`${title} ${index}`} />
              <div className="movie-hover-overlay">
                <div className="movie-hover-content">
                  <div className="movie-hover-actions">
                    <span className="action-circle play-circle">▶</span>
                    <span className="action-circle">+</span>
                    <span className="action-circle">👍</span>
                  </div>
                  <div className="movie-hover-info">
                    <span className="match-score">98% Relevante</span>
                    <span className="duration">1h 55m</span>
                    <span className="hd-badge">HD</span>
                  </div>
                  <div className="movie-hover-tags">
                    Empolgante • Ação • Ficção
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="movie-row-right" onClick={() => handleScroll("right")}>
          <span>〉</span>
        </div>
      </div>
    </div>
  );
}

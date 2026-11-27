"use client";

import { useState } from "react";
import Photo from "./Photo";
import { site } from "@/lib/site";

export default function VideoCard() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${site.video.id}?autoplay=1&rel=0`}
          title="Clothes and food donation drive"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button className="video video-poster" onClick={() => setPlaying(true)} aria-label="Play video: clothes and food donation drive">
      <Photo file="clothes" alt="" />
      <span className="play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="28" height="28"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
      </span>
    </button>
  );
}

'use client';

import { useState } from 'react';
import ProjArray from './projectList';
import { Projects } from './projectList';
import VideoPlayer from './projectHover'; 
import AnimatedPopup from './AnimatedPopup';

export default function Sidebar() {

  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const handleHover = (video: string | null) => {
    setHoveredVideo(video);
  };
  return (
    <div className="hidden lg:block w-[15em] fixed right-0 z-100 bg-[#0a192f] h-full">
      <div> 
        <div className='inline-block w-20'>
          <h2 className="mt-25 border-b-1">Portfolio</h2>
        </div>
        {Projects.map((project) => (
          <div key={project.id} className='mt-4'>
            
            <ProjArray
              id={project.id}
              name={project.name}
              video={project.video}
              route={project.route}
              onHover={handleHover}
            />
          </div>
        ))}

        {/* The div of the video */}
        {hoveredVideo && (
        <AnimatedPopup show={!!hoveredVideo}>
          <VideoPlayer src={hoveredVideo!} />
        </AnimatedPopup>
        )}
        </div>
      </div>
  );
}

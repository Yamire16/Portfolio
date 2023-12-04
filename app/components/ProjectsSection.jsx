"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Chibi Bat",
    description: "Used multiple modifiers and a particle system to create the hair for this chibi bat, along with multiple lights to create a scene for rendering",
    image: "/images/bat.png",
    tag: ["All", "Blender"],
  },
  {
    id: 2,
    title: "Axe",
    description: "Used a sketch as a reference that showed both the front and the side, it was easy to make by using extrude and move tool",
    image: "/images/Axe.png",
    tag: ["All", "Blender"],
  },
  {
    id: 3,
    title: "Chibi Owl",
    description: "One of the first models I made without following a tutorial",
    image: "/images/Owl.png",
    tag: ["All", "Blender"],
  },
  {
    id: 4,
    title: "Sword",
    description: "It's got a pretty cool bloom",
    image: "/images/SwordBlend.png",
    tag: ["All", "Blender"],
  },
  {
    id: 5,
    title: "Bottle Island",
    description: "An island in a bottle? Who would have thought, does anyone live in there?",
    image: "/images/IslandBottle1080.png",
    tag: ["All", "Blender"],
  },{
    id: 6,
    title: "Chibi Gwen",
    description: "A chibi version of Gwen. Used a reference from TFT's little legends",
    image: "/images/Gwen_BlueBG.png",
    tag: ["All", "Blender"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Blender"
          isSelected={tag === "Blender"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
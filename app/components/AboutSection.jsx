"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Blender</li>
                <li>3ds Max</li>
                <li>Unreal Engine</li>
                <li>Unity</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>LCUCK</li>
                <li>CEITI</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
                            <span className="text-4xl font-bold text-white mb-4">Previous Project</span>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/Gwen_1080x1080.png" width={1000} height={1000} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a college student at LCUCK following a CMP (Game Development) course.
                        With a passion for computers and a drive to learn, I have explored programming, different jobs, and 3D software over the years.
                        I finally found my calling as a 3D artist using Blender, and I am eager to develop my skills and pursue a career in this field.
                        <br></br>
                        <br></br>
                        I am a highly motivated and results-oriented individual with a strong work ethic by practising my skills through projects every day.
                        In addition to Blender I'm a bit familiar with 3ds Max, Unreal Engine and Unity with experience developing small projects 
                        using these softwares.

                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
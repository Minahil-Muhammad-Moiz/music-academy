"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal"
import Image from "next/image";

const content = [
    {
      title: "Collaborative Practice Sessions",
      description:
        "Join forces with fellow musicians in real-time practice sessions. Share your passion for music, collaborate on pieces, and receive immediate feedback. Our platform empowers you to refine your skills and create harmonious performances together.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--blue-500))] flex items-center justify-center text-white">
          Collaborative Practice
        </div>
      ),
    },
    {
      title: "Real-Time Performance Feedback",
      description:
        "Receive instant feedback on your performances from instructors and peers. Track your progress in real-time and make adjustments on the fly. Say goodbye to delays in feedback and embrace the continuous improvement of your musical talents.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          Linear Board Demo
        </div>
      ),
    },
    {
      title: "Version Control for Compositions",
      description:
        "Keep track of every change in your compositions with our version control system. Work confidently, knowing you can always revert to previous versions. Whether you're composing alone or with a group, our platform ensures you're always on the same page.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] flex items-center justify-center text-white">
          Composition Version Control
        </div>
      ),
    },
    {
      title: "Never Run Out of Practice Material",
      description:
        "Access a vast library of sheet music, tutorials, and exercises. With our platform, you'll always have new material to challenge your skills and keep your practice sessions fresh and engaging.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
          Endless Practice Material
        </div>
      ),
    },
  ];
  
export function WhyUs() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}

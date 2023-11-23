import React from "react";
import LessonCard from "./LessonCard";
import "./LessonCardCSS.css";

const lessonType1 = {
  src: "src/assets/castle.jpg",
  title: "Learn basic phrases",
  context: "Grammar, Vocabulary",
};
const lessonType2 = {
  src: "src/assets/books.jpg",
  title: "Learn from topics",
  context: "Sport, Food, Travel",
};
const lessonType3 = {
  src: "src/assets/social.jpg",
  title: "Learn from social media",
  context: "Tweet/Tiktok/Instagram",
};
const lessonType4 = {
  src: "src/assets/augmented.jpg",
  title: "Augmented Learning",
  context: "Coming soon",
};

const lessonTypes = [lessonType1, lessonType2, lessonType3, lessonType4];

const LessonCards = () => {
  return (
    <div className="lesson-cards">
      {lessonTypes.map((lessonType) => (
        <LessonCard
          src={lessonType.src}
          title={lessonType.title}
          context={lessonType.context}
        />
      ))}
    </div>
  );
};

export default LessonCards;

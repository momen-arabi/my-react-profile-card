import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillSet = [
  {
    id: "1",
    skill: "HTML+CSS",
    level: "advanced",
  },
  {
    id: "2",
    skill: "Javascript",
    level: "advanced",
  },
  {
    id: "3",
    skill: "jQuery",
    level: "advanced",
  },
  {
    id: "4",
    skill: "React JS",
    level: "beginner",
  },
  {
    id: "5",
    skill: "Next JS",
    level: "beginner",
  },
  {
    id: "6",
    skill: "Node Js",
    level: "intermediate",
  },
  {
    id: "7",
    skill: "Express Js",
    level: "intermediate",
  },
  {
    id: "8",
    skill: "Mongoose",
    level: "intermediate",
  },
];

const levelEmojis = [
  {
    level: "beginner",
    emoji: "👶",
  },
  {
    level: "intermediate",
    emoji: "👍",
  },
  {
    level: "advanced",
    emoji: "💪",
  },
];

function randomColorWithContrast() {
  // generate random RGB values for background color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // convert RGB to hex
  const hexColor = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`.toUpperCase();

  // calculate luminance (perceived brightness)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // choose text color based on luminance
  const textColor = luminance > 0.5 ? "#000000" : "#FFFFFF";

  return {
    backgroundColor: hexColor,
    textColor: textColor,
  };
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="../avatar.jpg" alt="my_avatar" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Momen Ahmed Arabi</h1>
      <p>
        Full-stack web developer with a background in civil engineering, specializing in creating dynamic and responsive websites using modern
        technologies, and committed to continuous growth in the tech industry.
      </p>
    </div>
  );
}

function Skill({ back, color, text, level }) {
  let emoji = levelEmojis.find((emoji) => emoji.level == level).emoji;
  return (
    <div
      className="skill"
      style={{
        backgroundColor: back,
        color,
      }}
    >
      <span>{text}</span>
      <span>{emoji}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skillSet.map((skill) => {
        let skillColor = randomColorWithContrast();
        return <Skill back={skillColor.backgroundColor} color={skillColor.textColor} text={skill.skill} level={skill.level} />;
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

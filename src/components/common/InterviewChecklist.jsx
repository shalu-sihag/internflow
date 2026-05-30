import { useEffect, useState } from "react";
import { generateChecklist } from "../../utils/checklistGenerator";

function InterviewChecklist({ role, jobId }) {
  const storageKey = `checklist-${jobId}`;

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      setSkills(JSON.parse(saved));
    } else {
      const generatedSkills = generateChecklist(role).map(
        (skill) => ({
          name: skill,
          completed: false,
        })
      );

      setSkills(generatedSkills);
    }
  }, [role, storageKey]);

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify(skills)
    );
  }, [skills, storageKey]);

  const toggleSkill = (index) => {
    const updated = [...skills];

    updated[index].completed =
      !updated[index].completed;

    setSkills(updated);
  };

  const addSkill = () => {
    if (!newSkill.trim()) return;

    setSkills([
      ...skills,
      {
        name: newSkill,
        completed: false,
      },
    ]);

    setNewSkill("");
  };

  const removeSkill = (index) => {
    const updated = skills.filter(
      (_, i) => i !== index
    );

    setSkills(updated);
  };

  const completedCount = skills.filter(
    (skill) => skill.completed
  ).length;

  const progress =
    skills.length === 0
      ? 0
      : Math.round(
          (completedCount / skills.length) * 100
        );

  return (
    <div className="checklist-box">
      <h3>Interview Preparation</h3>

      <div className="progress-info">
        <span>
          {completedCount}/{skills.length} Completed
        </span>

        <span>{progress}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <label>
              <input
                type="checkbox"
                checked={skill.completed}
                onChange={() =>
                  toggleSkill(index)
                }
              />

              <span
                className={
                  skill.completed
                    ? "completed"
                    : ""
                }
              >
                {skill.name}
              </span>
            </label>

            <button
              className="remove-skill-btn"
              onClick={() =>
                removeSkill(index)
              }
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="skill-input">
        <input
          type="text"
          placeholder="Add custom skill..."
          value={newSkill}
          onChange={(e) =>
            setNewSkill(e.target.value)
          }
        />

        <button onClick={addSkill}>
          Add
        </button>
      </div>
    </div>
  );
}

export default InterviewChecklist;
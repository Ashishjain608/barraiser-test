import React, { useState } from "react";
import AddProjectModal from "./AddProjectModal";
import ProjectList from "./ProjectList";
import Stopwatch from "./stopwatch/Stopwatch";
import Timer from "./stopwatch/Timer";
import "./Widget.css";

const Widget = () => {
  const [taskValue, setTaskValue] = useState();

  const [selectedProject, setSelectedProject] = useState();

  const [timerState, setTimerState] = useState("stop");

  const [showProjectList, setShowProjectList] = useState(false);

  const [anchorEl, setAnchorEl] = useState();

  const [addModel, setAddModal] = useState(false);

  const onTaskInputChange = (ev) => {
    setTaskValue(ev.target.value);
  };

  const onProjectClick = (ev) => {
    setShowProjectList(true);
    setAnchorEl(ev.currentTarget);
  };

  const toggleTimer = () => {
    setTimerState(timerState === "stop" ? "inprogress" : "stop");
  };

  const closeProjectList = () => {
    setShowProjectList(false);
  };

  const onProjectSelection = (project) => {
    setSelectedProject(project);
  };

  const showAddModal = () => {
    setAddModal(true);
  };

  const closeAddModal = () => {
    setAddModal(false);
  };

  return (
    <>
      <div className="widget">
        <input
          className="task-input"
          onChange={onTaskInputChange}
          placeholder="What are you working on ?"
          value={taskValue}
        ></input>
        <button onClick={onProjectClick}>
          {selectedProject ? selectedProject.name : "Add Project"}
        </button>

        {timerState === "inprogress" ? <Stopwatch /> : <Timer time={0} />}

        <button onClick={toggleTimer}>
          {timerState === "stop" ? "Start" : "Stop"}
        </button>
      </div>

      {showProjectList && (
        <ProjectList
          anchorEl={anchorEl}
          open={showProjectList}
          handleClose={closeProjectList}
          onProjectSelection={onProjectSelection}
          showAddModal={showAddModal}
        />
      )}
      
      {addModel && (
        <AddProjectModal open={addModel} handleClose={closeAddModal} />
      )}
    </>
  );
};

export default Widget;

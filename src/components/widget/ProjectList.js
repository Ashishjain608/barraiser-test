import React, { useEffect, useState } from "react";
import { Popover } from "@mui/material";
import { fetchProjects } from "../../api/CommonApi";

const ProjectList = (props) => {
  const { open, anchorEl, handleClose, onProjectSelection, showAddModal } =
    props;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projects = fetchProjects();
    setProjects && setProjects(projects);
  }, []);

  const createNewProject = () => {
    showAddModal();
    handleClose();
  };

  return (
    <Popover
      id="project-popover"
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <div className="project-list">
        {projects.map((p) => (
          <div key={p.id} onClick={() => onProjectSelection(p.id)}>
            {p.name}
          </div>
        ))}
      </div>
      <div>
        <button onClick={createNewProject}>Create new Project</button>
      </div>
    </Popover>
  );
};

export default ProjectList;

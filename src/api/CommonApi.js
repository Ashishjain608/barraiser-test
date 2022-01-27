import axios from "axios";

const getNavItems = async () => {
  const resp = await axios.get("./nav-items.json");

  return resp.data;
};

const fetchProjects = () => {
  let allProjects = JSON.parse(localStorage.getItem("projects"));
  return allProjects || [];
};

const addProject = (project) => {
  let allProjects = JSON.parse(localStorage.getItem("projects"));
  if (allProjects) {
    allProjects.push(project);
  } else {
    allProjects = [project];
  }
  localStorage.setItem("project", JSON.stringify(allProjects));
};

export { getNavItems, fetchProjects, addProject };

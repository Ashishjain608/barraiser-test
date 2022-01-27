import React from "react";
import Navbar from "../nav/Navbar";
import TaskList from "../task-list/TaskList";
import Widget from "../widget/Widget";
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <Navbar />
      <div>
          <Widget />
          <TaskList />
      </div>
    </div>
  );
};

export default MainPage;

import React, { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const url = `projects.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("useProjects hooks", data);
        setProjects(data);
      });
  }, [projects]);
  return [projects];
};

export default useProjects;

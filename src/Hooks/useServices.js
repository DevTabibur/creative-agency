import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/services`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        setServices(data);
      });
  }, [services]);
  return [services];
};

export default useServices;

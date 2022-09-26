import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = `services.json`;
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

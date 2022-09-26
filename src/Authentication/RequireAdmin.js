import React, { useState } from "react";

const RequireAdmin = () => {
  const [user] = useState(true);
  return [user];
};

export default RequireAdmin;

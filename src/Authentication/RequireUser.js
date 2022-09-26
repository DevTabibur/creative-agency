import React, { useState } from "react";

const RequireUser = () => {
  const [user] = useState(false);
  return [user];
};

export default RequireUser;

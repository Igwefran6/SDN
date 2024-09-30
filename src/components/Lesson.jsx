import React, { useEffect, useState } from "react";
import components from "./courses/_export";

function Lesson({ currentStage }) {
  const [element, setElement] = useState(null);
  useEffect(() => {
    setElement(components[currentStage]);
  }, [currentStage]);
  return <>{element}</>;
}

export default Lesson;

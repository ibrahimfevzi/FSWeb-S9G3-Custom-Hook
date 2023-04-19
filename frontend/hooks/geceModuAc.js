import { useState } from "react";

function useDarkMode() {
  const [geceModu, setGeceModu] = useState(false);

  const toggleDarkMode = () => {
    setGeceModu(!geceModu);
  };

  return [geceModu, toggleDarkMode];
}

export default useDarkMode;

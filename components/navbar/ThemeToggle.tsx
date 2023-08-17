"use client"
import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { CssBaseline, ThemeProvider } from "@mui/material";
import darkTheme from "@/lib/darkTheme";
import lightTheme from "@/lib/lightTheme";



const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
  <CssBaseline/>
      <div className="rounded-full bg-gray-300 p-2 z-[999999]">
        {isDarkMode ? (
          <FiSun
            className="text-[1.5rem] cursor-pointer"
            onClick={toggleDarkMode}
            title="Light Mode"
          />
        ) : (
          <FiMoon
            className="text-[1.5rem] cursor-pointer"
            onClick={toggleDarkMode}
            title="Dark Mode"
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default ThemeToggle;

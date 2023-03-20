import React from "react";
import './App.css';
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Light, Dark } from "./Themes/Themes";
import { Sidebar } from "./Layout/Sidebar";
import { MyRoutes } from './Routes/MyRouters';
import { ThemeContext } from "./Context/ThemeContext";
import { Toolbar } from "./Layout/Toolbar";


const App = () => {
  const [theme, setTheme] = React.useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(true);
  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Toolbar sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen} />
            <Container className={sidebarOpen ? "sidebarState active" : ""}>

              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <MyRoutes />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({ theme }) => theme.bgtotal};
  transition:all 0.3s ;
  &.active {
    grid-template-columns: 300px auto;
  }
  color:${({ theme }) => theme.text};
`;
export default App;

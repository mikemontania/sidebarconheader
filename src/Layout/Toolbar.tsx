import React from 'react'
import logo from "../assets/react.svg";
import './Toolbar.css';
import styled from "styled-components";
import { AiOutlineMenu } from 'react-icons/ai';
import { SidebarContainer, SidebarUseStateType } from '../Interfaces/Interface';
import { ThemeContext } from '../Context/ThemeContext';
import { sidebarVariable } from '../Themes/Themes';
import App from '../App';
import { MdLogout } from 'react-icons/md';

export const Toolbar = ({ sidebarOpen, setSidebarOpen }: SidebarUseStateType) => {
  const ChangeSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const { setTheme, theme } = React.useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme === "light" ? "dark" : "light"));
  };
  return (
    <nav>

      <ContainerHeader isOpen={sidebarOpen} themeUse={theme}>
        <LogoContenedor className={(sidebarOpen ? 'gridactivo' : 'gridinactivo')} >
          <div className="Logocontent">
            <div className={'imgcontent '}  >
              <img src={logo} />
            </div>
            <h2 className={(sidebarOpen ? 'mostrarTexto' : 'ocultarTexto')}>React new App</h2>
          </div>
          <div className="section">
            <AiOutlineMenu className='menu' onClick={ChangeSidebarOpen} />
          </div>
        </LogoContenedor>


        <div className="section">
          <div className="siteHeader__item siteHeaderLogo">
            <div className="fa fa-inbox"></div>
          </div>
          <div className="siteHeader__item siteHeaderButton is-site-header-item-selected">Inbox</div>
          <div className="siteHeader__item siteHeaderButton">Sent</div>
          <div className="siteHeader__item siteHeaderButton">Trash</div>
        </div>
        <div className="section">
          <div className="siteHeader__item siteHeaderButton">Settings</div>
          <div className="siteHeader__item siteHeaderButton" > <MdLogout /></div>
        </div>
      </ContainerHeader>
    </nav>
  )
}
const ContainerHeader = styled.div<SidebarContainer>`
display: flex;   
justify-content: space-between; 
padding: 0px; 
color: ${(props) => props.theme.text};
background: ${(props) => props.theme.bg};  `

const LogoContenedor = styled.div`
display: grid; 
transition:all 0.3s ; 
color:${({ theme }) => theme.text};        `


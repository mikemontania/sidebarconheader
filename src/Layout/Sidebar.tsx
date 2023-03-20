import styled from 'styled-components';  
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
 import { SidebarContainer,  SidebarUseStateType  } from '../Interfaces/Interface';
import { sidebarVariable } from '../Themes/Themes';
import { ThemeContext } from '../Context/ThemeContext';
import { SidebarArrayMenu } from './SidebarArray';
 

export const Sidebar = ({ sidebarOpen, setSidebarOpen }:SidebarUseStateType) => {
   
      const { setTheme, theme } = useContext(ThemeContext);
      const CambiarTheme = () => {
        setTheme( (theme === 'light' ? 'dark' : 'light'));
      };
   return (
    <Container isOpen={sidebarOpen} themeUse={theme}>
    
    {SidebarArrayMenu.map(({ Icon, label, to }) => (
      <div className='LinkContainer' key={label}>
        <NavLink
          to={to}
          className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
        >
          <div className='Linkicon'><Icon/></div>
          {sidebarOpen && <span>{label}</span>}
        </NavLink>
      </div>
    ))}
   
   {   <div className='Themecontent'>
      {sidebarOpen && <span className='titletheme'>Dark mode</span>}
      <div className='Togglecontent'>
        <div className='grid theme-container'>
          <div className='content'>
            <div className='demo'>
              
                <input
                   type='checkbox'
                  className='theme-swither'
                  onClick={CambiarTheme}
                ></input>
              
            </div>
          </div>
        </div>
      </div>
    </div>  }
  </Container>
  )
}
//#region Data links

  //#endregion
  
  //#region STYLED COMPONENTS
  const Container = styled.div<SidebarContainer>`
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.bg};
    position: sticky;
    padding-top: 20px;
    .Sidebarbutton {
      position: absolute;
      top: ${sidebarVariable.xxlSpacing};
      right: -18px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: ${(props) => props.theme.bgtgderecha};
      box-shadow: 0 0 4px ${(props) => props.theme.bg3},
        0 0 7px ${(props) => props.theme.bg};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
      border: none;
      letter-spacing: inherit;
      color: inherit;
      font-size: inherit;
      text-align: inherit;
      padding: 0;
      font-family: inherit;
      outline: none;
    }
     
    .LinkContainer {
      margin: 8px 0;
     
      padding: 0 15%;
      :hover {
        background: ${(props) => props.theme.bg3};
      }
      .Links {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: calc(${sidebarVariable.smSpacing}-2px) 0;
        color: ${(props) => props.theme.text};
        height:50px;
        .Linkicon {
          padding: ${sidebarVariable.smSpacing} ${sidebarVariable.mdSpacing};
          display: flex;
  
          svg {
            font-size: 25px;
          }
        }
        &.active {
          .Linkicon {
            svg {
              color: ${(props) => props.theme.bg4};
            }
          }
        }
      }
    }
    .Themecontent {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .titletheme {
        display: block;
        padding: 10px;
        font-weight: 700;
        opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
        transition: all 0.3s;
        white-space: nowrap;
        overflow: hidden;
      }
      .Togglecontent {
        margin: ${({ isOpen }) => (isOpen ? `auto 40px` : `auto 15px`)};
        width: 36px;
        height: 20px;
        border-radius: 10px;
        transition: all 0.3s;
        position: relative;
        .theme-container {
          background-blend-mode: multiply, multiply;
          transition: 0.4s;
          .grid {
            display: grid;
            justify-items: center;
            align-content: center;
            height: 100vh;
            width: 100vw;
            font-family: 'Lato', sans-serif;
          }
          .demo {
            font-size: 32px;
            .switch {
              position: relative;
              display: inline-block;
              width: 60px;
              height: 34px;
              .theme-swither {
                opacity: 0;
                width: 0;
                height: 0;
                &:checked + .slider:before {
                  left: 4px;
                  content: '🌑';
                  transform: translateX(26px);
                }
              }
              .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: ${({ themeUse }) =>
                  themeUse === 'light' ? sidebarVariable.lightcheckbox : sidebarVariable.checkbox};
  
                transition: 0.4s;
                &::before {
                  position: absolute;
                  content: '☀️';
                  height: 0px;
                  width: 0px;
                  left: -10px;
                  top: 16px;
                  line-height: 0px;
                  transition: 0.4s;
                }
                &.round {
                  border-radius: 34px;
  
                  &::before {
                    border-radius: 50%;
                  }
                }
              }
            }
          }
        }
      }
    }
  `; 
  const Divider = styled.div `
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.bg3};
    margin: ${sidebarVariable.lgSpacing} 0;
  `;
  //#endregion
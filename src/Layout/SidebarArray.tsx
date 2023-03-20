import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { SidebarItem } from '../Interfaces/Interface';
import { Configuracion } from '../Pages/Configuracion';
import { Dashboard } from '../Pages/Dashboard';
import { Usuarios } from '../Pages/Usuarios';
export const SidebarArrayMenu:SidebarItem[] = [
    {
      label: 'Dashboard',
      Icon: MdOutlineSpaceDashboard ,
      to: '/',
      path:'',
      Component: Dashboard
    }, 
    {
      label: 'Usuarios',
      Icon: AiOutlineUser ,
      to: '/usuarios',
      path:'/usuarios',
      Component: Usuarios
    },  
    {
      label: 'Configuración',
      Icon: AiOutlineSetting ,
      to: '/configuracion',
      path:'/configuracion',
      Component: Configuracion
    },
   
  ];
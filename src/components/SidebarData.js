import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from "react-icons/fc";
import * as BsIcons from "react-icons/bs";
import * as hiIcons from "react-icons/hi";
import * as Fiicons from "react-icons/fi";
import * as Goicons from "react-icons/go";
import * as Gricons from "react-icons/gr";
import * as Riicons from "react-icons/ri";

export const SidebarData=[
    {
        title: "Home",
        path: '/',
        icon:<Goicons.GoHome/>,
        cName: 'nav-text'
    },
    {
        title: "Products",
        path: '/products',
        icon:<Fiicons.FiGrid/>,
        cName: 'nav-text'
    },
    {
        title: "Service",
        path: '/community',
        icon:<Riicons.RiUserVoiceLine/>,
        cName: 'nav-text'
    },
    {
        title: "Jobs",
        path: '/jobs',
        icon:<FaIcons.FaBriefcase/>,
        cName: 'nav-text'
    },
    {
        title: "Techquiz",
        path: '/quiz',
        icon:<BsIcons.BsClipboard/>,
        cName: 'nav-text'
    },
    {
        title: "Chat",
        path: '/messages',
        
        icon:<IoIcons.IoMdPaperPlane/>,
        cName: 'nav-text'
    },
    {
        title: "Support",
        path: '/support',
        icon:<FaIcons.FaFacebookMessenger/>,
        cName: 'nav-text'
    },
    {
        title: "About ",
        path: '/about',
        icon:<IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: "FAQ ",
        path: '/faq',
        icon:<BsIcons.BsFillQuestionCircleFill/>,
        cName: 'nav-text'
    },
    
]
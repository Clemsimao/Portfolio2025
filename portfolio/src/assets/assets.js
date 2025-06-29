
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import github from './github.png';
import figma from './figma.png';
import git from './git.png';
import docker from './docker.png';
import mongodb from './mongodb.png';
import postgresql from './postgresql.svg';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import work1 from './work-1.png';
import work2 from './work-2.png';
import work3 from './work-3.png';
import work4 from './work-4.png';

export const assets = {
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    github,
    figma,
    docker,
    git,
    postgresql,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Mon portfolio',
        description: 'NextJS, TailwindCSS',
        bgImage: work1,
    },
    {
        title: 'Site vitrine coffee-shop',
        description: `Projet d'école, React, Psql, Vite`,
        bgImage: work2,
    },
    {
        title: 'Création API Pokédex',
        description: 'EJS, Psql, Express, Sequelize',
        bgImage: work3,
    },
    {
        title: 'Création Kanban avec API',
        description: 'JS, EJS, express, Vite',
        bgImage: work4,
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Mon portfolio', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Langages', description: 'HTML, CSS, JS, React, Next, Angular' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Formations', description: "O'Clock Titre CDA niv 6 (bac+3)" },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projets', description: "Projets d'école et projets réel" }
];

export const toolsData = [
    assets.vscode, assets.figma, assets.postgresql, assets.mongodb, assets.docker, assets.github, assets.git
];
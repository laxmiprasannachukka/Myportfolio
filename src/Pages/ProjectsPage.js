import React from 'react';
//import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import projects from '../Components/allprojects';
import { useState } from 'react';

//const allCategories = ['All', ...new Set(projects.map(item => item.category))];

function ProjectsPage() {
   // const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(projects);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(projects)
            return;
        }
        const filteredData  = projects.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Projects'} span={'projects'} />
            </div>
            <div className="portfolios-data">
            {/** 
                <Categories filter={filter} categories={categories} />
            **/ }
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default ProjectsPage;
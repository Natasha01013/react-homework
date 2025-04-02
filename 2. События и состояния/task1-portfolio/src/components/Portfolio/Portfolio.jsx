import React, { useState } from 'react';
import images from '../data/allProjects';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

// Компонент Portfolio с состоянием
const Portfolio = () => {
  const allProjects = images;

  //useState - хук
  //selectedFilter: Переменная состояния, которая хранит текущий выбранный фильтр.
  //setSelectedFilter: Функция, которая используется для обновления значения selectedFilter
  //'All': Начальное значение selectedFilter
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleSelectFilter = (filter) => {
    setSelectedFilter(filter); // обновим значение selectedFilter на выбранный фильтр
  };

  let filteredProjects; 
  if (selectedFilter === 'All') {
    filteredProjects = allProjects; // Если выбран "All", то отображаем все картинки
  } else {
    filteredProjects = allProjects.filter((project) => project.category === selectedFilter); // Иначе фильтруем проекты по категориям
  }

  const filters = ['All', ...new Set(allProjects.map((project) => project.category))];//создаем новый массив, начиная с 'All' и добавляем уникальные категории из Set

  return (
    <div>
      <Toolbar
        filters={filters}
        selected={selectedFilter}
        onSelectFilter={handleSelectFilter}
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
};

export default Portfolio;
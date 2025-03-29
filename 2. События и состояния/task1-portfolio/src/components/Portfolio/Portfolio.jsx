import React, { useState } from 'react';

// Компонент Toolbar c набором кнопок фильтров без состояния 
const Toolbar = ({ filters, selected, onSelectFilter }) => { //от Portfolio мы передаём три свойства в функциональный компонент
  return (
    <div>
      {filters.map((filter) => ( //используем метод map для итерации по массиву filters
        <button
          key={filter} //уникальный ключ, необходимый React для эффективного обновления списка кнопок
          onClick={() => onSelectFilter(filter)}
          className={ selected === filter ? 'selected-filter' : 'normal-filter' }>
          {filter} {/*текст кнопки, который отображает название фильтра */}
        </button>
      ))}
    </div>
  );
};

// Компонент ProjectList для отображения картинок без состояния 
const ProjectList = ({ projects }) => { //Компонент ProjectList принимает МАССИВ объектов projects 
  return (
    <div className="project-list-container"> 
      {projects.map((project, index) => (//используем метод map для итерации по массиву
        <img
          key={index}//уникальный ключ, необходимый React для эффективного обновления списка картинок
          src={project.img}
          alt={project.category}
        />
      ))}
    </div>
  );
};

// Компонент Portfolio с состоянием
const Portfolio = () => {
  const allProjects = [ //массив картинок
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
      category: "Flayers"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
      category: "Flayers"
    }
  ];

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
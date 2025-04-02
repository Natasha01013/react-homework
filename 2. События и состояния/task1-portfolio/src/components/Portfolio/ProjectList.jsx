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

export default ProjectList;
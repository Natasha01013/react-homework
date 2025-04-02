// Компонент для отображения иконки переключения вида
const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="material-icons" onClick={onSwitch}>
      {icon}
    </div>
  );
};

export default IconSwitch;
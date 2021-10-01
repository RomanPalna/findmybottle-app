import './iconButton.css';

const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <button
      className="IconButton"
      type="button"
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};

export default IconButton;

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

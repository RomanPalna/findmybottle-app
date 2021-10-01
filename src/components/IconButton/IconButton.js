const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <button type="button" onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
};

export default IconButton;

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

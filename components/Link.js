
const Link = ({ children, ...params}) => {
 return (
  <a {...params}>{children}</a>
 );
};

export default Link;

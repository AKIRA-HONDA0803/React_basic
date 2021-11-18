// export const ColoredMessage = () => {
export const ColoredMessage = (props) => {
  // console.log(props);
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "20px"
  };

  // return <p style={contentStyle}>お元気ですか？</p>;
  return <p style={contentStyle}>{children}</p>;
};

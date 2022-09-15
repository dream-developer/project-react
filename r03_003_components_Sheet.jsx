export const Sheet = (props) => {
  const {sheetStyle, children} = props;
  return <div style={sheetStyle}>{children}</div>;
};
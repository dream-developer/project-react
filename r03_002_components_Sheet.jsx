export const Sheet = (props) => {
  const {sheetStyle, message} = props; // 1
  return <div style={sheetStyle}>{message}</div>;
};
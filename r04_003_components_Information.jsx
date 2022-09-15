export const Information = (props) => { // 1
    console.log('Information')
    return (
      <>
        <div>Informaton</div>
        <input type="text" onInput={props.inputInfo} /> {/* 2 */}
      </>
    );
  };
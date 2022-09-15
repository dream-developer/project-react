export const NowData = (props) => {
  return ( 
    <>
      { props.isPending
        ? <div>Loading...</div>
        : <div>「{props.now}」のデータ</div>
      }
    </>
  );
}
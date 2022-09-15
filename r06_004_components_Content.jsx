import { useSearchParams } from 'react-router-dom';

export const Content = () => {
    const [searchParams, setSearchParams] = useSearchParams(); // 1
    
    const kind = searchParams.get('kind');
    const sortby = searchParams.get('sortby');
  
    const inputKind = (e) => { // 2
      setSearchParams(
        { kind: e.target.value,
          sortby }
        );
    }
    
    return (
      <>
        <div>Content</div>
        <input type="text" onInput={inputKind} value={kind} /> {/* 3 */}
        <p>kind:{kind} / sortby:{sortby}</p>
      </>
    );  
}
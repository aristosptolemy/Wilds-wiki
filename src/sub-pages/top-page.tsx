
import { Link } from 'react-router-dom';

const TopPage = () => {
  
  return (
    <>
      <div>
        <div className="">
          <div className="title">自分専用wiki</div>
        </div>
        <div>
          <div className="choice-area">
            <Link to="/new-title-build">新しいタイトルの追加</Link>
          </div>
        </div>
      </div>
    </>
  )
}


export default TopPage;
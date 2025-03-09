
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TitlesGet } from '../backend/server-end';

const TopPage = () => {

  const [TitleDatas, setTitleDatas] = useState([]);


  useEffect(() => {
    titlesGet()
  },[])

  const titlesGet = async () => {
    const titledata = await TitlesGet();
    setTitleDatas(titledata)
  }
  
  return (
    <>
      <div>
        <div className="">
          <div className="title">自分専用wiki</div>
        </div>
        <div>
          <div className="choice-area">
            <Link to="/new-title-build">新しいタイトルの追加</Link>
            <div></div>
            <ul>
              {TitleDatas.map((page) => (
                <li key={page}>
                  <Link to={`/gameWiKi/${page[1]}`} >{page[1]}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}


export default TopPage;
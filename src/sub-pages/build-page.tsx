import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/build-page.css';

import toast from 'react-hot-toast';
import { NewTitle, TitlesGet } from '../backend/server-end';


const NewTitleBuild = () => {
  const [Title, setTitle] = useState('');
  const [TitleDatas, setTitleDatas] = useState([]);

  useEffect(() => {
    titlesGet()
  },[])

  const titlesGet = async () => {
    const titledata = await TitlesGet();
    setTitleDatas(titledata)
  }

  const NewTitleInsert = async() => {
    toast.promise(
      NewTitle(Title),
      {
        loading: '追加中...',
        success: <b>{Title}の追加完了!</b>,
        error: <b>{Title}の追加が失敗しました</b>,
      }
    );
    setTitle('');
  }
  
  return (
    <>
      <div className="add-window">
        <div className="add-title">
          <div className="title-label">タイトルを入力してください</div>
          <input placeholder="タイトル" className="title-build-input" value={Title} onChange={(e) => {setTitle(e.target.value)}}/>
          <a className="abutton" type="button" role="button" onClick={() => NewTitleInsert()}>作成</a>
        </div>
        <div>
          <div>追加されてあるタイトル</div>
        </div>
      </div>
    </>
  )
}


export default NewTitleBuild;
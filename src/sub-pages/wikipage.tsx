import { useParams } from 'react-router-dom';

const WikiDetail = () => {
  const { id } = useParams(); // URL上の/users/:id からパラメータを取得
  
  // 取得したidを使ってAPIリクエストをしたり、
  // 表示するデータを取得したりできる
  
  return (
    <div>
      <h2>Wiki詳細ページ</h2>
      <p>このページのID: {id}</p>
    </div>
  );
}

export default WikiDetail;

const PostURL = "https://script.google.com/macros/s/AKfycby2DvbXQwuwC9Cq-8gUQzxMr0byiDyYvXq_HeZWfPYDXtOZ37CZtwxvCEE6rfS0ie1Q/exec";
import toast from 'react-hot-toast';


export const NewTitle = async (titleName: string) => {
  try {
    const response = await fetch (
      PostURL,
      {
        method: 'POST',
        body: JSON.stringify({
          action: 'new-title',
          sub_action: 'get',
          sheetName: 'タイトルデータ',
          title: titleName
        })
      }
    )
    const result = await response.json()

  }catch (e){
    return e;
  }
}

export const TitlesGet = async () => {
  try {
    const response = await fetch (
      PostURL,
      {
        method: 'POST',
        body: JSON.stringify({
          action: 'titles-get',
          sheetName: 'タイトルデータ'
        })
      }
    )
    const result = await response.json()
    console.log(result)
    return result;
  }catch (e){
    return e;
  }
}
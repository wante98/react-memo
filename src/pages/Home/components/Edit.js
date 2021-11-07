const Edit = () => { //return 會認為是js元件
    return <div>
      <h1>Memo</h1>
      <p>記事：</p>
      <input type="text" />
      <p>日期：</p>
      <input type="date" />
      <p>時間：</p>
      <input type="time" />
      <button className="add">新增</button>
      </div>
}

    export default Edit;

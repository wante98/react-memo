const Item = ({ id, note, date, time, deleteData }) => {

  function deleteItem() {
    //submittingStatus.current = true
    deleteData(function(prev) {
      return prev.filter(item => item.id !== id)
    })
  }

  return (<div className="item">
      <div>
        <p>{note} <span> {`${date} ${time}`}</span></p>
      </div>
      <button onClick={deleteItem} className="remove">刪除</button>
    </div>
  );
};

export default Item;

import Item from './Item'

const arr = [ '有有有', 2 ,3 ]

const List = ({ listData, deleteData }) => {
  console.log('listData', listData)
    return <div className="list">
    {
      listData.map((item) => {
        const {note,date,time} = item
        return <Item note={note} date={date} time={time} deleteData={deleteData} />
      }
    )
    }
    </div>
  }

    export default List;

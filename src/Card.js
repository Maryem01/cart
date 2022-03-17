const Card = ({ nameList, color, backgroundColor, deleteHandler }) => {
  return (
    <div>
      {nameList.map(({ name, age, address }, idx) => (
        <div
          className="cardWrapper"
          key={idx}
          style={{ backgroundColor, color }}
        >
          <div> Name:{name}</div>
          <div> Age:{age}</div>
          <div>Address:{address}</div>
          <div
            className="deleteBtn"
            onClick={(event) => deleteHandler(event, idx)
            
            }
          >
            
            x
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;

import PropTypes from "prop-types";
import "./add.scss";

const Add = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    //add new item
    //axios.post(`api/${slug}s`,{})
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

Add.propTypes = {
  slug: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  setOpen: PropTypes.func,
};

export default Add;

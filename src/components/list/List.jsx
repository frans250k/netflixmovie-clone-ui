import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <span className="listTitle">Continue to Watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined />
        <div className="container">
          <ListItem />
        </div>
        <ArrowForwardIosOutlined />
      </div>
    </div>
  );
};

export default List;

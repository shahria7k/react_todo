import {
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@material-ui/core";
import "./todo.css";

const Todo = (props) => {
	return (
		<List className="todo__list">
			<ListItem>
				<ListItemAvatar>
					<Avatar />
				</ListItemAvatar>
				<ListItemText primary={props.text} secondary="Dummy Deadline ⏰" />
			</ListItem>
		</List>
	);
};

export default Todo;

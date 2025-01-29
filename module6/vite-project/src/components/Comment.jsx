// function Comment(props) {
//   return (
//     <div className="Comment componentBox">
//       <UserInfo user={props.author} />{" "}
//       {/* here we pass the author prop down to the UserInfo component */}
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{props.date.toLocaleString()}</div>
//     </div>
//   );
// }

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment componentBox">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;

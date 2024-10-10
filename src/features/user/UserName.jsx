import { useSelector } from "react-redux";

function UserName() {
  const username = useSelector((store) => store.user.username);

  if (!username) return null;

  return (
    <div className="text-sm font-semibold hidden md:block uppercase">
      {username}
    </div>
  );
}

export default UserName;

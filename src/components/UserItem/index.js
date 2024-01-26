import './index.css'

const UserItem = props => {
  const {userDetails, isDelete, showPassword} = props
  const {id, websiteName, userName, password} = userDetails
  const initialName = userName.slice(0, 1).toUpperCase()

  const onDeleteItem = () => {
    isDelete(id)
  }

  return (
    <li className="card">
      <div className="name">
        <p>{initialName}</p>
      </div>
      <div>
        <p>{websiteName}</p>
        <p>{userName}</p>
        {showPassword ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            height="7px"
            width="60px"
          />
        )}
      </div>
      <button
        className="button"
        type="button"
        data-testid="delete"
        onClick={onDeleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          height="20px"
          width="20px"
          className="icon"
        />
      </button>
    </li>
  )
}

export default UserItem

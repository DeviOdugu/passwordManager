import {Component} from 'react'
import {v4} from 'uuid'
import UserItem from '../UserItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    usersList: [],
    searchInput: '',
    showPasswords: false,
  }

  onClickCheckBox = () => {
    const {showPasswords} = this.state
    // this is for toggle purpose otherwise you can write showPasswords: true
    this.setState({
      showPasswords: !showPasswords,
    })
  }

  onChangeWebsiteInput = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  onChangeUserNameInput = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onChangePasswordInput = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onAddList = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newUser = {
      id: v4(),
      websiteName: websiteInput,
      userName: usernameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      usersList: [...prevState.usersList, newUser],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  isDelete = id => {
    const {usersList} = this.state
    const filteredUserList = usersList.filter(eachItem => eachItem.id !== id)
    this.setState({
      usersList: filteredUserList,
    })
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      usersList,
      searchInput,
      showPasswords,
    } = this.state

    const searchResults = usersList.filter(user =>
      user.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          height="40px"
          width="130px"
        />
        <div className="card-1">
          <div>
            <form className="form-card" onSubmit={this.onAddList}>
              <h1 className="heading"> Add New Password </h1>
              <div className="a">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  height="10px"
                  width="10px"
                  className="image"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  value={websiteInput}
                  onChange={this.onChangeWebsiteInput}
                  className="input"
                />
              </div>
              <br />
              <div className="a">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  height="10px"
                  width="10px"
                  className="image"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={usernameInput}
                  onChange={this.onChangeUserNameInput}
                  className="input"
                />
              </div>
              <br />
              <div className="a">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  height="10px"
                  width="10px"
                  className="image"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={passwordInput}
                  onChange={this.onChangePasswordInput}
                  className="input"
                />
              </div>
              <br />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              height="300px"
              width="300px"
              className="pass-image"
            />
          </div>
        </div>
        <div className="card-2">
          <div className="b">
            <div className="len">
              <h1 className="pass">Your Passwords</h1>
              <p className="length"> {searchResults.length} </p>
            </div>
            <div className="c">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                height="10px"
                width="10px"
                alt="search"
                className="image"
              />
              <input
                type="search"
                placeholder="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                className="input"
              />
            </div>
          </div>
          <hr />
          <div className="check">
            <input
              type="checkbox"
              onChange={this.onClickCheckBox}
              className="check-box"
              id="checkbox"
            />
            <label htmlFor="checkbox" className="s">
              Show Passwords
            </label>
          </div>
          {searchResults.length === 0 && (
            <div className="no-pass">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                height="250px"
                width="250px"
              />
              <p>No Passwords</p>
            </div>
          )}

          {searchResults.length !== 0 && (
            <ul className="lists">
              {searchResults.map(eachUser => (
                <UserItem
                  key={eachUser.id}
                  userDetails={eachUser}
                  isDelete={this.isDelete}
                  showPassword={showPasswords}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager

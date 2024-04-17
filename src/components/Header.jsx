import "./Header.css"

const Header = () => {
  return (
      <header>
          <div className="logo-container">
              <p className="thriv">Thrivetalk</p>
          </div>
          <div>
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Blog</li>
              </ul>

          </div>
          <div>
              <button className="btn">contact us</button>
          </div>
        </header>
  )
}

export default Header
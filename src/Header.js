import catGif from '../src/rolling-cat-cat-rolling.gif'
function Header() {
    return (
        <div className="header">
            <h1>The memeinitor</h1>
            <img src={catGif} width="50px" height="50px" ></img>
            <p>Let's make some memes</p>
        </div>
    )
}

export default Header;
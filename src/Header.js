import catGif from '../src/rolling-cat-cat-rolling.gif'
import logo from '../src/logo.png'
function Header() {
    return (
        <div className="header">
            <div className="leftSide">
                <p> UbiHard </p>
            </div>
            <div className="headerCenter"> 
                <h1>Skele-memes</h1>
                <img src={catGif} width="50px" height="50px" ></img>
                <p >Let's make some memes</p>
            </div>
            <div className="rightSide"> 
                <img src={logo} width="70px" height="50px"></img>
            </div>

           
            
        </div>
        
    )
}

export default Header;
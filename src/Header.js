import catGif from '../src/rolling-cat-cat-rolling.gif'
import logo from '../src/ubisoft-logo-horizontal-vector.svg'
function Header() {
    return (
        <div className="header">
            <div className="leftSide">
                <p> UbiHard </p>
            </div>
            <div className="headerCenter"> 
                <h1>Skele-GPT</h1>
                <img src={catGif} width="50px" height="50px" ></img>
                <p >Let's make some memes</p>
            </div>
            <div className="rightSide"> 
                <img src={logo} width="150px" height="150px" style={{filter:"invert(1)"}}></img>
            </div>

           
            
        </div>
        
    )
}

export default Header;
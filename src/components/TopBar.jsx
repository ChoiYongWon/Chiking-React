require("../css/topbar.css")
const Logo = require("./Logo")
const NavMenu = require("./NavMenu")

const TopBar = (props)=>{
    console.log(props)
    return (
        <>
        <div className='top-bar'>
             <div className='top-bar__left-wrap'>
                 <Logo/>
             </div>
            <div className='top-bar__right-wrap'>
                <NavMenu menuList={props.menuList} />
            </div>
        </div>
        </>
    )
}

module.exports = TopBar
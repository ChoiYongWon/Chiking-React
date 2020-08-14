require("../css/navmenu.css")

const TopBar = (props)=>{
    return (
        <>
        <ul className='top-bar__nav-menu-wrap'>
        
            {
                props.menuList.map((menu,i)=>
                    <li key={i} className='top-bar__nav-menu'>{menu}</li>
                )
            }
        </ul>
        </>
    )
}

module.exports = TopBar
require("../css/main.css")
const TopBar = require("./TopBar")

const Main = (props)=>{
    return (
        <>
            <div className="background__wrap">
                <TopBar menuList={["로그인","회원가입"]}/>
            </div>
        </>
    )
}

module.exports = Main
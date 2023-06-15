import './header.scss';
const Header = () => {
    return(<div className="header_container">
        <div className="header_logo">
            <img src={require("../assets/avava-logo.png")} alt='not found'/>
        </div>
        <div className="header_nav row">
                <a href='http//'>Home</a>
                <a href='http//'>About</a>
                <a href='http//'>Access Control</a>
                <a href='http//'>Digital</a>
        </div>
        <div className="header_search">
            <div className='header_search_span'>
                <input type="text" />
                <span>Search</span>
            </div>
        </div>
        <div className="header_icon row">
            <div><i className="fa fa-instagram"></i></div>
            <div><i className="fa fa-facebook"></i></div>
            <div><i className="fa fa-twitter"></i></div>
            <div><i className="fa fa-whatsapp"></i></div>

        </div>
        <div className='header_icon1'>
        <div><i className="fa fa-list"></i></div>
        </div>
    </div>)
}
export default Header ;
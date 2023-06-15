import './home.scss';
const Home = () =>{
    return(<div className="home_container">
        <div className="home_row">
            <div className="home_col">
                <h1>FUTURE <br /> IS NOW</h1>
                <h5>SMART HOME</h5>
                <p>Lemore ipsem doler sit amet consectors <br/> amorters elitd set to</p>
                <a href='http://'>See more</a>                
            </div>
            <div className="home_col">
                <img src={require('../assets/home.png')} alt='not found' />
            </div>
        </div>
        <div className="home_honey">
                <img src={require('../assets/honey1.png')} alt='not found' />
            </div>
    </div>)
}
export default Home;
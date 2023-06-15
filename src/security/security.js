import img1 from '../assets/security1.png';
import img2 from '../assets/security2.png';
import img3 from '../assets/security3.png';
import './security.scss';

const Security = () =>{
    const security_obj=[
        {
            security_img : img1,
            security_type : "A", 
        },
        {
            security_img : img2,
            security_type : "B", 
        },
        {
            security_img : img3,
            security_type : "C", 
        }
    ]
    return(<div className="security_container">
        <h2>SECURITY TYPE MODE</h2>
        <div className='row security_row'>
            { [...security_obj].map((ele,ind)=>{
                return(<div className='security_col'>
                        <div className='security_card'>
                            <div className='security_img row'>
                                <img src={ele.security_img} alt='tamil'/>
                            </div>
                            <div className='security_content'>
                                <h1>TYPE {ele.security_type}</h1>
                                <p>Lemore ipsem doler sit amet consectors amorters elitd set to sit amet consectors amorters elitd set to</p>
                                <a href='http/'>See More</a>
                            </div>
                        </div>
                    </div>)
            })}
        </div>
        <p className='security_para'>Lemore ipsem doler sit amet consectors amorters elitd set to sit amet consectors amorters elitd set toLemore ipsem doler sit amet consectors amorters elitd set to sit amet consectors amorters elitd seter
        onsectors amorters elitd set toLemore ipsem doler sit amet consectors amorters elitd set to sit amet consectors amorters elitd seter sem doler sit amet consectors amorters elitd set to sit amet consectors amorters elitd
        </p>
    </div>)
}
export default Security;
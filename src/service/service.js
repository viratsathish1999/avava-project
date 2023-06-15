import shape3 from '../../src/assets/Shape3.png'
import shap2 from '../../src/assets/Shape2.png'
import shape4 from '../../src/assets/Shape4.png'
import './service.scss'


const Service = () =>{
    const service_obj =[
        {
            service_img : shape3,
            service_title : 'SECURTY SYSTEM',
            service_para : 'Lemore ipsem doler sit amet consectors amorters elitd set to sit amet consectors amorters elitd set to'
        },
        {
            service_img : shap2,
            service_title : 'SMART LAMP',
            service_para : 'Lemore ipsem doler sit amet consectors amorters elitd set to sit amet consectors amorters elitd set to'
        },
        {
            service_img : shape4,
            service_title : 'CCTV  CONTROLS',
            service_para : 'Lemore ipsem doler sit amet consectors amorters elitd set to sit amet consectors amorters elitd set to'
        }
    ]
    return(<div className="service_container">
        <div className="service_row row">
        {[...service_obj].map((ele,ind)=>{

            return(<div className="service_col" key={ind}>

                <img src={ele.service_img}  alt="not found"/>
                <h1>{ele.service_title}</h1>
                <p>{ele.service_para}</p>
            </div>
            ) 
        })}
        </div>
        <div className="home_honey">
                <img src={require('../assets/honey.png')} alt='not found' />
            </div>
    </div>)
}
export default Service
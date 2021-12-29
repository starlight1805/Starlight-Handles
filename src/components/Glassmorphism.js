import React, { useEffect, useRef } from 'react';
import '../assets/Glassmorphism.css';
import VanillaTilt from 'vanilla-tilt';


function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }
  
function Glassmorphism(){
    const options = {
        scale: 1.2,
        speed: 1000,
        max: 30
      };
    
      return (
        <>
        <div class="gwrapper">
        <h2 className='career-heading'>Career Options</h2>
          {/*let longText ="Career Options";
          let list = longText.split('');
          <View style= {{ height: 500,alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column", flexWrap: "wrap-reverse", }}>
          {list.map(function (val, index) {
          return <View style={{ textAlign: "center",  }}key = { index }>

          <Text style={[styles.CHfont,LineFontSize]}>   {longText[index]}  </Text>
        </View>
          
        })}
      </View>*/}
          <Tilt className="gbox" options={options} >
          <div class="description">
                    
                    <h2 className='glassh2'>Flutter</h2>
                    <p className='glassp'>Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.</p>
                    <ul class="list" className='glassul'>
                        <li className='glassli'><a href="https://twitter.com/varkala_vivek" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter" style={{color:'#ccc',fontSize:'1.5rem',transition:'all 0.3s ease'}}></i></a></li>
                        <li className='glassli'><a href="https://github.com/starlight1805" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" style={{color:'#ccc',fontSize:'1.5rem',transition:'all 0.3s ease'}}></i></a></li>
                        <li className='glassli'><a href="https://www.linkedin.com/in/vivek-varkala-b7136b189/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in" style={{color:'#ccc',fontSize:'1.5rem',transition:'all 0.3s ease'}}></i></a></li>
                    </ul>
                    
                </div>
          </Tilt>
          <Tilt className="gbox" options={options} >
          <div class="description">
                    
                    <h2 className='glassh2'>React</h2>
                    <p className='glassp'>React is a free and open-source front-end JavaScript library for building UI or UI components. It is maintained by Facebook and individual developers and companies. React can be used for development of single-page or mobile applications.</p>
                    <ul class="list" className='glassul'>
                        <li className='glassli'><a href="https://twitter.com/varkala_vivek" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter" style={{color:'#ccc',fontSize:'1.5rem',transition:'all 0.3s ease'}}></i></a></li>
                        <li className='glassli'><a href="https://github.com/starlight1805" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" style={{color:'#ccc',fontSize:'1.5rem',transition:'all 0.3s ease'}}></i></a></li>
                        <li className='glassli'><a href="https://www.linkedin.com/in/vivek-varkala-b7136b189/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in" style={{color:'#ccc',fontSize:'1.5rem',transition:'all 0.3s ease'}}></i></a></li>
                    </ul>
                    
                </div>
          </Tilt>
          <Tilt className="gbox" options={options} >
          <div class="description">
                    
                    <h2 className='glassh2'>Robotics</h2>
                    <p className='glassp'>Robotics is a field that integrates computer science and engineering. Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans.</p>
                    <ul class="list" className='glassul'>
                        <li className='glassli'><a href="https://twitter.com/varkala_vivek" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter" style={{color:'#ccc',fontSize:'1.5rem',transition:'all 0.3s ease'}}></i></a></li>
                        <li className='glassli'><a href="https://github.com/starlight1805" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" style={{color:'#ccc',fontSize:'1.5rem',transition:'all 0.3s ease'}}></i></a></li>
                        <li className='glassli'><a href="https://www.linkedin.com/in/vivek-varkala-b7136b189/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in" style={{color:'#ccc',fontSize:'1.5rem',transition:'all 0.3s ease'}}></i></a></li>
                    </ul>
                    
                </div>
          </Tilt>
          </div>
        </>
      );
}
export default Glassmorphism;
{/*<Tilt options={{max: 25,speed: 400,easing:"cubic-bezier(.03,.98,.52,.99)",perspective:500,transition:true}}></Tilt>*/}
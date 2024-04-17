import men from '../assets/images/Mask Group.png'
import'./Firstblock.css'

const Firstblock = () => {
  return (
      <div className='firstblock'>
          <div className='info'>
              <p className="thriv">Thrivetalk</p>
              <div className=' main-info'>
                  <h1 className='title'>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
              </div>
              <div >
                  <p className='text'>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
              </div>
              <div className='yellow'>
                  <div className='yellow-btn'>who am i</div>
              <a href=""className='what'>What do i do</a>
              </div>
          </div>
          <div className='photoMen'>
             <img src={men} alt="" />
          </div>
      </div>
      
  )
}

export default Firstblock
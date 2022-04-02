import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'


const Data = [
  {
    avatar: AVTR1,
    name: 'Guest 1',
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu varius arcu, id iaculis est.Aliquam eget eros lacinia, egestas est at, scelerisque arcu. Proin dapibus urna leo, id lobortis ipsum dapibus non. Curabitur ut neque at elit mattis placerat in sit amet lectus.'
  },  
  {
    avatar: AVTR2,
    name: 'Guest 2',
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu varius arcu, id iaculis est.Aliquam eget eros lacinia, egestas est at, scelerisque arcu. Proin dapibus urna leo, id lobortis ipsum dapibus non. Curabitur ut neque at elit mattis placerat in sit amet lectus.'
  },  
  {
    avatar: AVTR3,
    name: 'Guest 3',
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu varius arcu, id iaculis est.Aliquam eget eros lacinia, egestas est at, scelerisque arcu. Proin dapibus urna leo, id lobortis ipsum dapibus non. Curabitur ut neque at elit mattis placerat in sit amet lectus.'
  },  
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          Data.map(({avatar, name, review}) =>{
            return(
              <article className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="this is avatar 1" />
                </div>
                  <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials
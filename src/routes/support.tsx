import React from 'react';
import emailjs from "emailjs-com";
import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'
import immagine from "../images/358579785_806237231159559_1116270722449275961_n.jpg"
import 'bootstrap/dist/css/bootstrap.css'

emailjs.init('SN92J-1D6ikUavlWa');

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Invia')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Invio in corso...')
    const { name, email, message } = e.target.elements
    
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)

    emailjs.send("service_j64fetm","template_5rek838",{
      name: name.value,
      to_name: "serrandeartistiche",
      from_name: name.value,
      message: message.value,
      })
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
    });
    setFormStatus('Inviato');
  }

  return (
    <Layout>
      <Article>
        <ArticleContent title="Contattaci">
        <p>🆓 Sopralluogo gratuito a Milano</p>
        <p>✅ Risultato Garantito nel tempo</p>
        <p>📲 +39 347 6428 424</p>
        <p>📥 serrandeartistiche@gmail.com</p>
          {/* create a short contact form with name, email, and message */}
          <form onSubmit={onSubmit} id="myForm">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Nome
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Messaggio
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <button className="btn btn-tr" type="submit">
              {formStatus}
            </button>
          </form>
        </ArticleContent>

        <ArticleMedia>
          <img
            alt="serrande artistiche"
            className="mx-auto lg:aspect-[5/7] lg:w-full"
            src={immagine}
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
export default ContactForm

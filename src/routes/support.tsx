import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'
import { useState } from 'react'

export default function SupportPage() {
  const [success, setSuccess] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    setSuccess(true)
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
          <form className="space-y-4">
            <div>
              <label
                className="block text-lg font-medium leading-10"
                htmlFor="name"
              >
                NOME
              </label>
              <input
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium leading-10"
                htmlFor="email"
              >
                EMAIL
              </label>
              <input
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium leading-10"
                htmlFor="message"
              >
                MESSAGGIO
              </label>
              <textarea
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                id="message"
                name="message"
              />
            </div>

            <button
              type="submit"
              onClick={handleClick}
              className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
            >
              Invia
            </button>

            {success && (
              <div className="mt-2 text-xs italic text-gray-500">
                🎉 Messaggio inviato!
              </div>
            )}
          </form>
        </ArticleContent>

        <ArticleMedia>
          <img
            alt="serrande artistiche"
            className="mx-auto lg:aspect-[5/7] lg:w-full"
            src="../images/358579785_806237231159559_1116270722449275961_n.jpg"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}

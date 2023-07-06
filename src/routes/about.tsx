import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'
import immagine from "../images/355444395_776167860817189_6641656214310492860_n.jpg"

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Chi siamo">
          {/* prettier-ignore */}
          <p>Siamo un’azienda leader nel ripristino di serrande a Milano e in tutto  il territorio nazionale.</p>
          <p>Mettiamo a tua disposizione una  squadra di esperti altamente qualificati che si dedicano con passione a trasformare la tua saracinesca in un’opera d’arte unica e irresistibile.</p>    
          <p>La nostra missione è garantire risultati di alta qualità, offrendo servizi di livello superiore che soddisfano le tue aspettative.</p>
        </ArticleContent>

        <ArticleMedia>
          <img
            alt="serrande artistiche"
            className="mx-auto lg:aspect-[5/7] lg:w-full"
            width="420"
            height="640"
            src={immagine}
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}

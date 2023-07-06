import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'
import immagine from "../images/357837853_294556966465385_1343375527504111735_n.jpg"

export default function ContactPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Contact">
        Aggiungi qui le tue informazioni di contatto.
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

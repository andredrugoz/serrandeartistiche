import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'

export default function ContactPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Contact">
        Aggiungi qui le tue informazioni di contatto.
        </ArticleContent>

        <ArticleMedia>
          <img
            alt=""
            className="mx-auto lg:aspect-[5/7] lg:w-full"
            width="420"
            height="640"
            src="../images/357837853_294556966465385_1343375527504111735_n.jpg"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}

import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'

export default function FaqsPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="FAQ">
          <details
            className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
            open
          >
            <summary className="-mx-4 cursor-pointer border-primary-200 py-3 px-4">
            Come avviene il sopralluogo?
            </summary>
            <p>
            Da oltre 5 anni siamo l’azienda di riferimento nel ripristino delle serrande, offrendo i migliori street artist in circolazione e garantendo i risultati, fissa un sopralluogo gratuito dalla nostra <a href="/support">pagina di Contatti</a>. 
            </p>
          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
              Come faremo il progetto?
            </summary>
            <p>
            Ti proponiamo diversi progetti realizzabili in base alle tue esigenze e andiamo a decidere insieme quello più adatto a diventare l’opera che vorrai sulla tua serranda o negozio.
            </p>
          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
            Come realizziamo l'opera?
            </summary>
            <p>
            Realizziamo e curiamo nei minimi dettagli l’opera assicurandoti un risultato ottimale. Garantiamo la durata evitandoti nuovi interventi che ti comporterebbero spese inutili. 
            </p>
          </details>
        </ArticleContent>

        <ArticleMedia>
          <img
            alt="Lorem Picsum"
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

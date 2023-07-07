import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Layout } from '@/components/layout'
import immagine from "../images/358535129_132655923189230_5444935758060835910_n.jpg"

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="STREET ART"
        subtitle="+ RIQUALIFICAZIONE URBANA"
        content="Mettiamo a tua disposizione una squadra di esperti altamente qualificati che si dedicano con passione a trasformare la tua saracinesca in un’opera d’arte unica e irresistibile."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}

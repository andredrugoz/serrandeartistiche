import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="STREET ART e RIQUALIFICAZIONE URBANA"
        content="Mettiamo a tua disposizione una squadra di esperti altamente qualificati che si dedicano con passione a trasformare la tua saracinesca in un’opera d’arte unica e irresistibile."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}

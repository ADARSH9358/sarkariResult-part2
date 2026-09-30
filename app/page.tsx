import ContentCards from '@/components/content-cards'
import Header from '@/components/header'
import HomepageInformation from '@/components/homepage-information'

export default function Page() {
  return (
    <main className="min-h-screen bg-white pt-0">
      <Header />
      <ContentCards />
      <HomepageInformation />
    </main>
  )
}

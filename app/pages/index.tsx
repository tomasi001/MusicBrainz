import RadialArt from "app/core/components/RadialArt"
import { scrollBarStateEnum } from "app/core/constants/types"
import Layout from "app/core/layouts/Layout"
import PageWrapper from "app/core/layouts/PageWrapper"
import { scrollBarStateAtom } from "app/core/state/Atoms"
import { BlitzPage } from "blitz"
import { useRecoilValue } from "recoil"
import About from "./About"
import Landing from "./Landing"

const Home: BlitzPage = () => {
  const scrollBarState = useRecoilValue(scrollBarStateAtom)
  return (
    <PageWrapper>
      <RadialArt />
      {scrollBarState === scrollBarStateEnum.ABOUT ? <About /> : <Landing />}
    </PageWrapper>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page: JSX.Element) => <Layout title="Home">{page}</Layout>

export default Home

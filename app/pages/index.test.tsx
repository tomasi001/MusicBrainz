import "@testing-library/jest-dom/extend-expect"
import { cleanup, render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import About from "./About"

const renderContainer = () => {
  return render(
    <RecoilRoot>
      <About />
    </RecoilRoot>
  )
}

afterEach(cleanup)

test("Renders Upload Witness Component", async () => {
  const component = renderContainer()
  expect(component).toMatchSnapshot()
})

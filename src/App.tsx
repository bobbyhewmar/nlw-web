import { useState } from "react";
import { Carousel } from "./components/Carousel";
import { DuoPublicher } from "./components/DuoPublicher";
import { Logo } from "./components/Logo";
import { Title } from "./components/Title";
import { res } from "./utils/data"

function App() {
  const [data] = useState(res)

  return <>
    <Logo />
    <Title />
    <Carousel data={data} />
    <DuoPublicher />
  </>
}

export default App

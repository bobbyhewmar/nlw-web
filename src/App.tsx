import { useState } from "react";
import { Carousel } from "./components/Carousel";
import { DuoPublicher } from "./components/DuoPublicher";
import { Logo } from "./components/Logo";
import { Modal } from "./components/Modal";
import { Title } from "./components/Title";
import { res } from "./utils/data"

function App() {
  const [data] = useState(res)
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return <>
    <Logo />
    <Title />
    <Carousel data={data} />
    <DuoPublicher openModal={openModal} />
    <Modal closeModal={closeModal} isOpen={isOpen} />
  </>
}

export default App

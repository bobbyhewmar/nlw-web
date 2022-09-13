import { GithubLogo } from "phosphor-react"

type Props = {
  url: string
}
export function RedirectToCodeSource({ url }: Props) {
  return <a href={url} target="_blank" className="flex gap-2 items-center text-[#2A2634]/75 hover:text-white/25 transition-all">
    <GithubLogo size={"2.25rem"} weight="fill" />
    <span className="text-sm">Source code</span>
  </a>
}
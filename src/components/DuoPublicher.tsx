import {IconSearch} from "./Icons/IconSearch"

type Props = {
  openModal: () => void;
}

export function DuoPublicher ({ openModal }: Props) {
    return (
        <div className="w-full my-8 rounded-lg bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]">
            <div className="flex flex-col md:flex-row w-full py-6 px-8 bg-[#2A2634] justify-between items-center text-white rounded-md text-base mt-1">
                <div className="flex-grow flex flex-col">
                    <span className="font-black text-2xl">Não encontrou seu duo?</span>
                    <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
                </div>
                <button className="mt-4 md:mt-0 w-full md:w-auto bg-violet-500 flex py-3 px-4 rounded-md font-medium gap-3" onClick={() => openModal()}>
                    <IconSearch />
                    Publicar anúncio
                </button>
            </div>
        </div>
    )
}
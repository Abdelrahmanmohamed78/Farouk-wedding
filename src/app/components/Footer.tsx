import Link from "next/link"
import { greatVibes } from "../layout"

function Footer({ weddingDate }: {weddingDate: Date}) {
  return (
    <footer className='py-20 px-5 bg-[#f6f0e4] text-[#835D2F]'>
      <div className="circles relative flex justify-center mb-10">
        <span className='border -mr-1 w-6 h-6 block rounded-[50%]'></span>
        <span className='border -ml-1 w-6 h-6 block rounded-[50%]'></span>
      </div>
      <div className={`${greatVibes.className} text-4xl flex justify-center gap-2 mb-5`}>
        <span>Farouk</span>
        <span>&</span>
        <span>Menna</span>
      </div>
      <p className="uppercase text-[12px] italic flex gap-2 justify-center">
        <span>{weddingDate.toLocaleString('en-US', { month: 'long' })}</span>
        <span>{weddingDate.getDate() > 9 ? weddingDate.getDate() : "0" + weddingDate.getDate()},</span>
        <span>{weddingDate.getFullYear()}</span>
      </p>
      <p className="text-[11px] text-[#dbc6b5] italic mt-5">Made with love by <Link className="font-bold" href={"https://www.linkedin.com/in/abdelrahman-mohamed-79baa51b6/"} target="blank">Abdelrahman ❤️</Link></p>
    </footer>
  )
}

export default Footer
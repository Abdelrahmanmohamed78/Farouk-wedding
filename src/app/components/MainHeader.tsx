import { greatVibes } from "../layout";

interface MainHeader {
  children: React.ReactNode
}

function MainHeader({ children }: MainHeader) {
  return <h3 className={`${greatVibes.className} text-[#835D2F] text-4xl sm:text-6xl`}>{children}</h3>;
}

export default MainHeader;
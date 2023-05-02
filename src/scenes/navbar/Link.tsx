import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  page: string;
  // selectedPage: string;
  selectedPage: SelectedPage;
  // setSelectedPage: (value: string) => void;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  // 소문자로 변환, 빈칸 없애줌
  // const lowerCasePage = page.toLowerCase().replace(/ /g, "")
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;

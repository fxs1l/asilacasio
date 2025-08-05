import TypographyParagraph from "../typography/paragraph";
import Hyperlink from "../ui/hyperlink";

export default function AboutMeArticle() {
  return (
    <article className="p-10 pt-0 text-justify">
      <TypographyParagraph>
        From machine learning to IoT to niche little web apps, I build systems
        that solve real-world problems (or just for fun). My background in
        Electronics Engineering from UP Diliman keeps me grounded in the
        technical details.
      </TypographyParagraph>
      <TypographyParagraph>
        I run{" "}
        <Hyperlink url="https://github.com/fxs1l/dotfiles"> Linux</Hyperlink>,
        partly for practicality, mostly for the bragging rights.
      </TypographyParagraph>
      <TypographyParagraph>
        I’m currently working toward my official engineer title through the
        October 2025 boards.
      </TypographyParagraph>
    </article>
  );
}

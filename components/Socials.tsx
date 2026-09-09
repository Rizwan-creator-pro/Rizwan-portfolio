import Link from "next/link";
import type { IconType } from "react-icons";
import {
  RiLinkedinLine,
  RiWhatsappLine,
  RiGithubLine,
  RiMailLine,
} from "react-icons/ri";

export const socialData: { name: string; link: string; Icon: IconType }[] = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/rizwan0626",
    Icon: RiLinkedinLine,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/923237004270",
    Icon: RiWhatsappLine,
  },
  {
    name: "GitHub",
    link: "https://github.com/Rizwan-creator-pro",
    Icon: RiGithubLine,
  },
  {
    name: "Email",
    link: "mailto:rimalik162534@gmail.com",
    Icon: RiMailLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="${
            social.name === 'LinkedIn'
              ? 'bg-accent rounded-full p-1.5 text-white hover:bg-accent/80'
              : 'hover:text-accent'
          } transition-all duration-300 flex items-center justify-center"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;

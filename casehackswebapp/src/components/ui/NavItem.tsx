import { HashLink } from "react-router-hash-link";

export default function NavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <li>
      <HashLink
        smooth
        to={href}
        className="group relative whitespace-nowrap flex shrink-0 transition-colors ease-in-out duration-300"
        onClick={onClick}
      >
        {label}
        <span className="absolute left-0 -bottom-1 border-b-2 w-0 group-hover:w-full ease-in-out duration-300 " />
      </HashLink>
    </li>
  );
}

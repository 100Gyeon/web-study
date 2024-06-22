import { flexColCenter } from '../mixins/styles';

interface CategoryButtonProps {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CategoryButton({ iconPath, iconAlt, text, onClick }: CategoryButtonProps) {
  return (
    <button
      className={`
      rounded-button-default
      border
      border-primary
      text-primary
      text-base
      font-bold
      pl-[22px]
      pr-[21px]
      py-4
      ${flexColCenter}
    `}
      onClick={onClick}
    >
      <img alt={iconAlt} src={iconPath} />
      <p>{text}</p>
    </button>
  );
}

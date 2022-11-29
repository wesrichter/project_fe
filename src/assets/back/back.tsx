type BackButtonProps = {
  onClick: () => void;
};

export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="39"
      height="29"
      viewBox="0 0 39 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line
        x1="37.5"
        y1="14.5"
        x2="1.5"
        y2="14.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="2"
        y1="13.8787"
        x2="13.8787"
        y2="2"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="13.8787"
        y1="27"
        x2="2"
        y2="15.1213"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

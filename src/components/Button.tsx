interface buttonProperty {
    label : string;
    disabled : boolean;
    onclick : () => void;
}

export const Button = ({ label, disabled, onclick }: buttonProperty) => {
  return (
    <button onClick={onclick} disabled={disabled}>
      {label}
    </button>
  );
};

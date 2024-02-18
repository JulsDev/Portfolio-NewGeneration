
interface IButton {
  id: string,
  type: 'submit' | 'reset' | 'button',
  className: string,
  text: string,
  isDisabled?: boolean | undefined
}

const Button = (props: IButton) => {
  const {
    id,
    type,
    className,
    text,
    isDisabled = false
  } = props;

  return (
    <button
      id={id}
      type={type}
      className={className}
      disabled={isDisabled}
    >
      {text}
    </button>
  )
};

export default Button;
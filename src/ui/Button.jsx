/* eslint-disable */
function Button({ type, onClick, children }) {
  if (type === "carousel")
    return (
      <button
        className="shrink-0 focus-within:ring-0 hover:bg-transparent"
        onClick={onClick}
      >
        {children}
      </button>
    );

  return <button onClick={onClick}>{children}</button>;
}

export default Button;

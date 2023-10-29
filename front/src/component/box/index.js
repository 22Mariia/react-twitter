import "./index.css";

export default function Box({ children, className, style = {} }) {
  return (
    <div style={style} className={`box ${className}`}>
      {children}
    </div>
  );
}
/* eslint-disable react/prop-types */
import "./UI.css";

export default function TitleOne({ className, titleSm, title, titleEx }) {
  return (
    <div className={`titleOne ${className}`}>
      <small>{titleSm}</small>
      <h2>
        {title} <span>{titleEx}</span>
      </h2>
    </div>
  );
}

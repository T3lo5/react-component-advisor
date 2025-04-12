import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

interface CardSectionProps {
  children: React.ReactNode;
  className?: string;
}

interface CardComponent extends React.FC<CardProps> {
  Header: React.FC<CardSectionProps>;
  Body: React.FC<CardSectionProps>;
  Footer: React.FC<CardSectionProps>;
}

const Card: React.FC<CardProps> = ({ children, className = "", id }) => {
  return (
    <div
      id={id}
      className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardSectionProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

const CardBody: React.FC<CardSectionProps> = ({ children, className = "" }) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
};

const CardFooter: React.FC<CardSectionProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`px-6 py-4 border-t border-gray-200 bg-gray-50 ${className}`}
    >
      {children}
    </div>
  );
};

const CardWithSubcomponents = Card as CardComponent;
CardWithSubcomponents.Header = CardHeader;
CardWithSubcomponents.Body = CardBody;
CardWithSubcomponents.Footer = CardFooter;

export default CardWithSubcomponents;

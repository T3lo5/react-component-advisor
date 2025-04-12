import React from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "tsx",
  className = "",
}) => {
  return (
    <div className={`code-block rounded-md mt-2 mb-4 ${className}`}>
      <pre className="whitespace-pre-wrap break-words">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;

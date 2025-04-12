import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500">
      <p>
        Desenvolvido para ajudar times React a tomar melhores decisões de
        componentização
      </p>
      <p className="mt-2 text-sm">
        <a
          href="https://github.com/seuprojeto/react-component-advisor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:underline"
        >
          GitHub
        </a>{" "}
        • Versão 0.1.0
      </p>
    </footer>
  );
};

export default Footer;
//TODO: adicionar o link do git do projeto 
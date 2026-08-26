import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <header>
        <h1>Meu Site de Teste</h1>
        <nav>
          <a href="/">Início</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>
      </header>

      <main>
        <section>
          <h2>Bem-vindo!</h2>
          <p>Este é um site HTML simples criado para testes. Ele não usa folhas de estilo CSS.</p>
        </section>

        <section>
          <h3>Coisas que gosto</h3>
          <ul>
            <li>HTML puro</li>
            <li>Páginas leves</li>
            <li>Simplicidade</li>
          </ul>
        </section>

        <section>
          <h3>Contato</h3>
          <p>Envie um e-mail para: <a href="mailto:teste@exemplo.com">teste@exemplo.com</a></p>
        </section>
      </main>

      <footer>
        <p>© 2026 - Site de teste. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}


import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="py-[var(--spacing-section)] pt-32 min-h-[60vh] flex items-center">
      <div className="container-narrow text-center">
        <p className="eyebrow mb-6">404</p>
        <h1
          className="text-balance"
          style={{ fontSize: 'var(--text-display-xl)' }}
        >
          Esta página no existe.
        </h1>
        <p
          className="mt-8 max-w-xl mx-auto leading-relaxed text-mute"
          style={{ fontSize: 'var(--text-body-lg)' }}
        >
          Quizá cambió de lugar. Si la buscabas por algo, escríbeme.
        </p>
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/" className="btn-primary">
            Inicio
          </Link>
          <a href="mailto:manuelfa92@gmail.com" className="btn-secondary">
            Escríbeme
          </a>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom'

export function ErrorPage() {
  return (
    <section className="">
      <header className="py-16 sm:text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
          <span>Oops!</span>
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-400">
          Sorry, an unexpected error has occurred
        </p>
        <p>
          Not found,
          <span className="pl-2 text-sky-400">
            <Link to="/">Go home</Link>
          </span>
        </p>
      </header>
    </section>
  )
}

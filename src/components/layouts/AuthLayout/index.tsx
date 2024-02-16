interface Props {
  children?: React.ReactNode
}

export function AuthLayout({ children }: Props) {
  return <div className="auth-layout min-w-[350px] w-max mx-auto mt-[100px]">{children}</div>
}

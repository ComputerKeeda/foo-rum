import AuthNavbar from "@/components/AuthNavbar/AuthNavbar"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <>
  <AuthNavbar/>
  <section>{children}</section>
  </>
)
}
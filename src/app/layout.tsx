export const metadata = {
  title: 'My Next.js Project',
  description: '기존 프로젝트에 Next.js 추가하기',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
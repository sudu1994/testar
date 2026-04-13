
export const metadata = {
  title: 'LiDAR AR App Final',
  description: 'Full AR placement system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}

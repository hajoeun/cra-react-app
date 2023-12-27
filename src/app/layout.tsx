import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created using create-react-app',
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}

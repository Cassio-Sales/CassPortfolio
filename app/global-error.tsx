'use client'

import NextError from 'next/error'

export default function GlobalError() {
  return (
    <html>
      <body>
        {/* `NextError` é o componente de erro padrão do Next.js. O código de status precisa ser passado,
        mas já que o App Router não expõe códigos de status para erros, passamos 0 para renderizar uma mensagem genérica. */}
        <NextError statusCode={0} />
      </body>
    </html>
  )
}

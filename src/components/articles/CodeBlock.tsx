import { useState } from 'react'

interface CodeBlockProps {
  language: string
  code: string
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback se a Clipboard API não estiver disponível
    }
  }

  return (
    <div className="code-block-container">
      <div className="code-block-header">
        <span className="code-lang">{language}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="btn-copiar"
          aria-label={`Copiar comando ${language} para a área de transferência`}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {copied ? 'check' : 'content_copy'}
          </span>
          <span>{copied ? 'Copiado!' : 'Copiar'}</span>
        </button>
      </div>
      <pre className="code-pre">
        <code>{code}</code>
      </pre>
    </div>
  )
}

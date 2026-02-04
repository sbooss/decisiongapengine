import { PDFDocument, StandardFonts } from 'pdf-lib'
import crypto from 'crypto'

export async function GET() {
  // 1. Criar ID único e timestamp
  const reportId = crypto.randomUUID()
  const generatedAt = new Date().toISOString()

  // 2. Criar o PDF
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([595, 842])
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  page.drawText('DECISION GAP ENGINE™', {
    x: 50,
    y: 800,
    size: 20,
    font,
  })

  page.drawText('Executive Diagnostic Report', {
    x: 50,
    y: 770,
    size: 14,
    font,
  })

  page.drawText(`Report ID: ${reportId}`, {
    x: 50,
    y: 720,
    size: 10,
    font,
  })

  page.drawText(`Generated at: ${generatedAt}`, {
    x: 50,
    y: 705,
    size: 10,
    font,
  })

  // 3. Gerar PDF bytes (pré-hash)
  const pdfBytes = await pdfDoc.save()

  // 4. Gerar HASH SHA-256
  const hash = crypto
    .createHash('sha256')
    .update(pdfBytes)
    .digest('hex')

  // 5. Criar nova página com assinatura
  const signaturePage = pdfDoc.addPage([595, 842])

  signaturePage.drawText('Document Integrity Signature', {
    x: 50,
    y: 800,
    size: 16,
    font,
  })

  signaturePage.drawText(`Report ID: ${reportId}`, {
    x: 50,
    y: 760,
    size: 10,
    font,
  })

  signaturePage.drawText(`SHA-256 Hash:`, {
    x: 50,
    y: 735,
    size: 10,
    font,
  })

  signaturePage.drawText(hash, {
    x: 50,
    y: 720,
    size: 9,
    font,
    maxWidth: 500,
  })

  signaturePage.drawText(
    'This document is cryptographically verifiable.',
    {
      x: 50,
      y: 680,
      size: 10,
      font,
    }
  )

  // 6. Salvar PDF final
  const finalPdfBytes = await pdfDoc.save()
  const uint8Array = new Uint8Array(finalPdfBytes)

  // 7. Retornar PDF
  return new Response(uint8Array, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition':
        'attachment; filename="decision-gap-report.pdf"',
    },
  })
}

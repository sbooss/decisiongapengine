import { NextResponse } from "next/server";
import { PDFDocument, StandardFonts } from "pdf-lib";

export async function POST(req: Request) {
  const { content } = await req.json();

  const pdf = await PDFDocument.create();
  const page = pdf.addPage();
  const font = await pdf.embedFont(StandardFonts.Helvetica);

  page.drawText("Decision Gap Engine™", {
    x: 50,
    y: 750,
    size: 18,
    font
  });

  page.drawText(content, {
    x: 50,
    y: 700,
    size: 12,
    font,
    maxWidth: 500
  });

  const bytes = await pdf.save();

  return new NextResponse(bytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=decision-report.pdf"
    }
  });
}

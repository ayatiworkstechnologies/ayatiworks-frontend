import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const filename = params.filename;
  
  if (!filename) {
    return new NextResponse("Filename is required", { status: 400 });
  }

  try {
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const filepath = path.join(uploadDir, filename);

    // Read the file from the filesystem
    const fileBuffer = await fs.readFile(filepath);

    // Determine the content type based on the file extension
    let contentType = "application/octet-stream";
    if (filename.endsWith(".pdf")) contentType = "application/pdf";
    else if (filename.endsWith(".doc")) contentType = "application/msword";
    else if (filename.endsWith(".docx")) contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    // Return the file buffer with the appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `inline; filename="${filename}"`
      }
    });

  } catch (error) {
    console.error("Error serving file:", error);
    return new NextResponse("File not found", { status: 404 });
  }
}

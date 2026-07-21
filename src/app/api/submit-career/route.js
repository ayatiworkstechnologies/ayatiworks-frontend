import { NextResponse } from "next/server";
import { verifyRecaptchaToken } from "../../lib/verify-recaptcha";
import fs from "fs/promises";
import path from "path";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const captchaToken = formData.get("captchaToken");

    if (process.env.NODE_ENV !== "development") {
      const verification = await verifyRecaptchaToken(captchaToken);
      if (!verification.ok) {
        return NextResponse.json(verification.body, {
          status: verification.status,
        });
      }
    }

    // ── Step 1: Save file locally and produce a public URL ──
    let resumeUrl = "No resume attached";
    const resumeFile = formData.get("resume");

    if (resumeFile && typeof resumeFile !== "string" && resumeFile.size > 0) {
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), "public", "uploads");
      await fs.mkdir(uploadDir, { recursive: true });

      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const safeFilename = resumeFile.name.replace(/[^a-zA-Z0-9.\-_]/g, "");
      const filename = `${uniqueSuffix}-${safeFilename}`;
      const filepath = path.join(uploadDir, filename);

      await fs.writeFile(filepath, buffer);

      const host = request.headers.get("host") || "ayatiworks.com";
      const protocol = host.includes("localhost") ? "http" : "https";
      resumeUrl = `${protocol}://${host}/api/download/${filename}`;
    }

    // ── Step 2: Send clean JSON payload (resume = URL string) ──
    const cleanPayload = {
      data: {
        name: formData.get("name") || "",
        email: formData.get("email") || "",
        phone: formData.get("phone") || "",
        role: formData.get("role") || "",
        coverletter: formData.get("coverletter") || "",
        additionalinfo: formData.get("additionalinfo") || "",
        resume: resumeUrl,
      },
    };

    const response = await fetch(
      "https://api.ayatiworks.com/api/v1/public/ayatiwork/career-1/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key":
            "3bc72efc00a99a7ad1d1e31225c6a3f833218dfb34d88cc6ecb4c2b9562ab0fd",
        },
        body: JSON.stringify(cleanPayload),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("External API Error:", err);
      return NextResponse.json(
        { message: `Backend API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

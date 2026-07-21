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

    let resumeUrl = "No resume attached";
    const resumeFile = formData.get("resume");

    if (resumeFile && typeof resumeFile !== "string") {
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create uploads directory if it doesn't exist
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      try {
        await fs.access(uploadDir);
      } catch {
        await fs.mkdir(uploadDir, { recursive: true });
      }

      // Generate unique filename
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const filename = `${uniqueSuffix}-${resumeFile.name.replace(/[^a-zA-Z0-9.-]/g, "")}`;
      const filepath = path.join(uploadDir, filename);

      await fs.writeFile(filepath, buffer);

      // Construct the public URL
      const host = request.headers.get("host") || "ayatiworks.com";
      const protocol = host.includes("localhost") ? "http" : "https";
      resumeUrl = `${protocol}://${host}/uploads/${filename}`;
    }

    // Construct a clean payload that perfectly matches the required API schema
    const cleanPayload = {
      data: {
        name: formData.get("name") || "",
        email: formData.get("email") || "",
        phone: formData.get("phone") || "",
        role: formData.get("role") || "",
        coverletter: formData.get("coverletter") || "",
        additionalinfo: formData.get("additionalinfo") || "",
        resume: resumeUrl
      }
    };

    const response = await fetch("https://api.ayatiworks.com/api/v1/public/ayatiwork/career-1/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": "3bc72efc00a99a7ad1d1e31225c6a3f833218dfb34d88cc6ecb4c2b9562ab0fd"
      },
      body: JSON.stringify(cleanPayload)
    });

    if (!response.ok) {
      let errorData;
      const textBody = await response.text();
      try {
        errorData = JSON.parse(textBody);
      } catch (e) {
        errorData = textBody;
      }
      return NextResponse.json(
        { message: errorData?.message || `API Error: ${response.status}`, details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("API Route Error:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

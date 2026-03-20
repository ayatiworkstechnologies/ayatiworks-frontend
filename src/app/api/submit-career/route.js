import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();

    const response = await fetch("https://api.ayatiworks.com/api/v1/public/ayatiwork/career/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": "3bc72efc00a99a7ad1d1e31225c6a3f833218dfb34d88cc6ecb4c2b9562ab0fd"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        errorData = await response.text();
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

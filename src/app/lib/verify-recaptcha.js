const RECAPTCHA_SECRET = "6LcMQqMtAAAAAKDvo58Xu5DsIktXzKDcWVjU8uyF";

export async function verifyRecaptchaToken(captchaToken) {
  if (!captchaToken) {
    return {
      ok: false,
      status: 400,
      body: { message: "reCAPTCHA token is missing" },
    };
  }

  const params = new URLSearchParams();
  params.append("secret", RECAPTCHA_SECRET);
  params.append("response", captchaToken);

  const recaptchaResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    }
  );

  const recaptchaData = await recaptchaResponse.json();

  if (!recaptchaData.success) {
    console.error(
      "reCAPTCHA Verification Failed:",
      recaptchaData["error-codes"]
    );

    return {
      ok: false,
      status: 403,
      body: {
        message: "reCAPTCHA verification failed",
        errors: recaptchaData["error-codes"],
      },
    };
  }

  // v3: check score (0.0 = bot, 1.0 = human). Reject if score < 0.5
  if (recaptchaData.score !== undefined && recaptchaData.score < 0.5) {
    console.error("reCAPTCHA v3 low score:", recaptchaData.score);
    return {
      ok: false,
      status: 403,
      body: { message: "reCAPTCHA score too low. Possible bot detected." },
    };
  }

  return { ok: true };
}

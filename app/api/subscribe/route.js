// TODO: Connect to actual email service (Mailchimp, ConvertKit, Resend, etc.)
// For now, logs the subscription and returns success.

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, jobTitle, industry } = body;

    if (!email || !email.includes("@")) {
      return Response.json(
        { error: "Valid email address required" },
        { status: 400 }
      );
    }

    // TODO: Send to email service with segmentation metadata
    console.log("[subscribe]", { email, jobTitle, industry, ts: new Date().toISOString() });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

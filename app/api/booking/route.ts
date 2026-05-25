import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validations";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendLeadEmail } from "@/lib/email";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = bookingSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ errors: parsed.error.flatten() }, { status: 400 });

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("booking_inquiries").insert(parsed.data);
    if (error) return NextResponse.json({ error: "Database insert failed" }, { status: 500 });
  }

  await sendLeadEmail({
    subject: `New safari booking inquiry from ${parsed.data.name}`,
    replyTo: parsed.data.email,
    html: `<h1>New Booking Inquiry</h1><pre>${JSON.stringify(parsed.data, null, 2)}</pre>`
  });

  return NextResponse.json({ ok: true });
}

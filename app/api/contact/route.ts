import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendLeadEmail } from "@/lib/email";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ errors: parsed.error.flatten() }, { status: 400 });

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("contact_messages").insert(parsed.data);
    if (error) return NextResponse.json({ error: "Database insert failed" }, { status: 500 });
  }

  await sendLeadEmail({
    subject: `Contact form: ${parsed.data.subject}`,
    replyTo: parsed.data.email,
    html: `<h1>New Contact Message</h1><pre>${JSON.stringify(parsed.data, null, 2)}</pre>`
  });

  return NextResponse.json({ ok: true });
}

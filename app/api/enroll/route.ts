import { NextResponse } from 'next/server';
import { saveEnrollment } from '../../../lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? '').trim();
    const childName = String(body?.childName ?? '').trim();
    const age = Number(body?.age ?? 0);
    const phone = String(body?.phone ?? '').trim();
    const message = String(body?.message ?? '').trim();

    if (!name || !childName || !phone || !Number.isFinite(age) || age < 2 || age > 6) {
      return NextResponse.json(
        { error: 'Please complete the required fields with a valid child age.' },
        { status: 400 }
      );
    }

    await saveEnrollment({
      name,
      childName,
      age,
      phone,
      message,
    });

    return NextResponse.json({
      success: true,
      message: 'Enrollment saved successfully.',
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Unable to save your enrollment. Please check your Supabase settings.';

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

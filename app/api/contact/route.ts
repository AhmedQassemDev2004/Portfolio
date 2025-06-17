import { NextResponse } from 'next/server';
import { serverClient } from '@/sanity/serverClient';

export async function POST(request: Request) {
  try {

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create the document in Sanity
    const doc = {
      _type: 'contactSubmission',
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
      status: 'new',
    };

    console.log('Attempting to create contact submission...');
    const result = await serverClient.create(doc) ;
    
    console.log('Contact submission created successfully:', result);

    return NextResponse.json(
      { message: 'Message sent successfully', data: result },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Error in contact API:', error);
    
    // Handle specific Sanity errors
    if (error && typeof error === 'object' && 'statusCode' in error && error.statusCode === 403) {
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
} 
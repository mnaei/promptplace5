export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Received Vercel deployment error webhook:', body);
    
    // Process the webhook data
    // You can add logic to handle the error, notify team members, etc.
    
    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
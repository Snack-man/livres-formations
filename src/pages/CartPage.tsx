import { Button } from '../components/ui/button';

export function CartPage() {
  // Mock data
  const cartItems = [
    { id: '1', title: 'Le Pagne Noir', price: 12.99, quantity: 1, image: '/placeholder.svg' },
    { id: '5', title: 'Introduction à React', price: 49.99, quantity: 1, image: '/placeholder.svg' },
  ];
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold text-center mb-8'>Votre Panier</h1>
      {cartItems.length === 0 ? (
        <p className='text-center text-gray-500'>Votre panier est vide.</p>
      ) : (
        <div className='max-w-4xl mx-auto'>
          {cartItems.map(item => (
            <div key={item.id} className='flex items-center justify-between border-b py-4'>
              <div className='flex items-center gap-4'>
                <img src={item.image} alt={item.title} className='w-20 h-20 object-cover rounded' />
                <div>
                  <h2 className='font-semibold'>{item.title}</h2>
                  <p className='text-gray-500'>{item.price} €</p>
                </div>
              </div>
              <p>x{item.quantity}</p>
            </div>
          ))}
          <div className='text-right mt-8'>
            <h3 className='text-2xl font-bold'>Total: {subtotal.toFixed(2)} €</h3>
            <Button className='mt-4' size='lg' style={{ backgroundColor: '#32CD32', color: 'white' }}>Procéder au paiement</Button>
          </div>
        </div>
      )}
    </div>
  );
}
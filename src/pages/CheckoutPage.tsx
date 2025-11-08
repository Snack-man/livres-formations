import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function CheckoutPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold text-center mb-8'>Paiement</h1>
      <div className='max-w-2xl mx-auto grid md:grid-cols-2 gap-12'>
        <div className='md:col-span-2'>
          <h2 className='text-2xl font-semibold mb-6'>Informations de facturation</h2>
          <form className='space-y-4'>
            <Input placeholder='Nom complet' />
            <Input placeholder='Adresse' />
            <Input placeholder='Ville' />
            <Input placeholder='Email' />
          </form>
        </div>
        <div>
          <h2 className='text-2xl font-semibold mb-6'>Options de Paiement</h2>
          <div className='space-y-4'>
            <Button variant='outline' className='w-full justify-start'>Wave</Button>
            <Button variant='outline' className='w-full justify-start'>Orange Money</Button>
            <Button variant='outline' className='w-full justify-start'>Carte de crédit</Button>
          </div>
        </div>
        <div className='bg-gray-50 p-6 rounded-lg'>
           <h2 className='text-2xl font-semibold mb-6'>Résumé</h2>
           <div className='space-y-2'>
            <div className='flex justify-between'><span>Sous-total</span><span>62.98 €</span></div>
            <div className='flex justify-between'><span>Livraison</span><span>5.00 €</span></div>
            <div className='flex justify-between font-bold text-lg'><span>Total</span><span>67.98 €</span></div>
           </div>
           <Button className='w-full mt-6' size='lg' style={{ backgroundColor: '#32CD32', color: 'white' }}>Payer</Button>
        </div>
      </div>
    </div>
  );
}
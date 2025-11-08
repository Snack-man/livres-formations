import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export function ContactPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>Contactez-nous</h1>
        <form className='space-y-6'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Nom</label>
            <Input id='name' placeholder='Votre nom' className='mt-1' />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <Input id='email' type='email' placeholder='Votre email' className='mt-1' />
          </div>
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
            <Textarea id='message' placeholder='Votre message' className='mt-1' rows={6} />
          </div>
          <div className='text-center'>
            <Button type='submit' size='lg' style={{ backgroundColor: '#32CD32', color: 'white' }}>Envoyer</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
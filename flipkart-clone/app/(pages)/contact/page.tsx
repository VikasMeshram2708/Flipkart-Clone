import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BharatMart Clone - Contact Us',
  description: 'Contact page for BharatMart ecommerce website.',
};

function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          We love to hear from you! Please feel free to reach out to us with any questions, comments, or concerns you may have.
        </p>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Contact Information:</h2>
          <div className="text-lg text-gray-300 mb-4">
            <p>Address: 123 BharatMart Street, City, Country</p>
            <p>Phone: +1 234 567 890</p>
            <p>
              Email:
              {' '}
              <a href="mailto:info@bharatmart.com" className="text-blue-500">
                info@bharatmart.com
              </a>
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Send us a Message:</h2>
          <ContactForm />
        </div>

        <p className="text-lg text-gray-300 text-center">
          We will respond to your message as soon as possible. Thank you for contacting BharatMart.
        </p>
      </div>
    </div>
  );
}

export default Contact;

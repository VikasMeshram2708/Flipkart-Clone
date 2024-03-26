import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - BharatMart',
  description:
    'Privacy policy for BharatMart ecommerce website.',
};

function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At BharatMart, we are committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website.
      </p>
      <h2 className="text-xl font-semibold mb-2">1. Information Collection:</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, and contact details when you voluntarily provide it to us through forms or registrations on our website.
      </p>
      <h2 className="text-xl font-semibold mb-2">2. Use of Information:</h2>
      <p className="mb-4">
        Personal information is utilized to improve our website functionality, personalize your experience, and communicate with you regarding updates, promotions, and important announcements.
      </p>
      <h2 className="text-xl font-semibold mb-2">3. Data Security:</h2>
      <p className="mb-4">
        We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
      </p>
      <h2 className="text-xl font-semibold mb-2">4. Sharing of Information:</h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to third parties. Your information may be shared with trusted third-party service providers who assist us in operating our website or conducting our business, subject to strict confidentiality agreements.
      </p>
      <h2 className="text-xl font-semibold mb-2">5. Third-Party Links:</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites. These sites have their own privacy policies, and we are not responsible for their practices. We encourage you to review the privacy policies of these websites before providing any personal information.
      </p>
      <h2 className="text-xl font-semibold mb-2">6. Childrens Privacy:</h2>
      <p className="mb-4">
        BharatMart does not knowingly collect personal information from children under the age of 13. If you are under 13, please do not submit any personal information to us. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.
      </p>
      <h2 className="text-xl font-semibold mb-2">7. Changes to this Policy:</h2>
      <p className="mb-4">
        We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be posted on this page, and your continued use of the website after changes have been made constitutes your acceptance of the revised policy.
      </p>
      <p>
        By using BharatMart website, you consent to the terms of this Privacy Policy. If you have any questions or concerns regarding our privacy practices, please contact us at
        {' '}
        <a href="mailto:contact@email.com" className="text-blue-500">contact@email.com</a>
        .
      </p>
      <p>
        This Privacy Policy was last updated on
        {' '}
        {new Date().toLocaleDateString()}
        .
      </p>
      <p>
        Thank you for choosing BharatMart.
      </p>
    </div>
  );
}

export default PrivacyPolicy;

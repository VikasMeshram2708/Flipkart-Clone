import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use - BharatMart',
  description:
    'Terms of use for BharatMart ecommerce website.',
};

function TermsOfUse() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
      <p className="mb-4">
        Welcome to BharatMart! By accessing and using our website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms and conditions, please do not use our website.
      </p>
      <h2 className="text-xl font-semibold mb-2">1. Website Use:</h2>
      <p className="mb-4">
        The content of the pages of this website is for your general information and use only. It is subject to change without notice.
      </p>
      <h2 className="text-xl font-semibold mb-2">2. User Conduct:</h2>
      <p className="mb-4">
        You agree not to use the website for any unlawful purpose or in a way that could damage, disable, overburden, or impair the websites operation or interfere with other users enjoyment of the website.
      </p>
      <h2 className="text-xl font-semibold mb-2">3. Intellectual Property:</h2>
      <p className="mb-4">
        All trademarks reproduced in this website, which are not the property of, or licensed to BharatMart, are acknowledged on the website. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
      </p>
      <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability:</h2>
      <p className="mb-4">
        BharatMart shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this website.
      </p>
      <h2 className="text-xl font-semibold mb-2">5. Governing Law:</h2>
      <p className="mb-4">
        Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
      </p>
      <h2 className="text-xl font-semibold mb-2">6. Changes to this Agreement:</h2>
      <p className="mb-4">
        BharatMart reserves the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the website after any such changes constitutes your acceptance of the new terms and conditions.
      </p>
      <p>
        If you have any questions or concerns regarding our terms of use, please contact us at
        {' '}
        <a href="mailto:contact@email.com" className="text-blue-500">contact@email.com</a>
        .
      </p>
      <p>
        These terms of use were last updated on
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

export default TermsOfUse;

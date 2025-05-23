import { useTranslation } from 'react-i18next';

export const Legal = () => {
  const { t, } = useTranslation();
  const legalInfo = t('legalInfo');
  const email = t('contact');

  // Replace all occurrences of the email in the legalInfo text with a mailto link
  const legalInfoWithLink = legalInfo.replace(new RegExp(email, 'g'), `<a href="mailto:${email}" class="text-blue-600 underline break-all">${email}</a>`);

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">{t('footer.legal')}</h1>
      <div className="prose prose-lg whitespace-pre-line text-left" dangerouslySetInnerHTML={{ __html: legalInfoWithLink }} />
    </div>
  );
}; 
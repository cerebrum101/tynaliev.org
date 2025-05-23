import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('nav.contacts')}</h1>
      <div className="prose prose-lg">
        <p>Contact information will be added here.</p>
      </div>
    </div>
  );
};

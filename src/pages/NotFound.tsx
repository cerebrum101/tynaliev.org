import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-6">{t('notFound.title', 'Page Not Found')}</h2>
        <p className="text-gray-500 mb-8">{t('notFound.message', 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.')}</p>
        <Link 
          to="/" 
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          {t('notFound.backHome', 'Back to Home')}
        </Link>
      </div>
    </div>
  );
}; 
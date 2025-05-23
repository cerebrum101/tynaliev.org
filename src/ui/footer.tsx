import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-lg">
            {t('footer.name')} © {new Date().getFullYear()}{' | '}
            <Link to="/legal" className="hover:text-gray-300 transition-colors">
              {t('footer.legal')}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

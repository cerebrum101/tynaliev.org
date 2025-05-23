import { useTranslation } from 'react-i18next';

export const Biography = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Photo */}
        <div className="w-full md:w-1/3">
          <img
            src="/assets/bio/tynaliev_astar.png"
            alt="Tynaliev Astar Biography Тыналиев Астар Биография "
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Biography Text */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-6">{t('biography.title')}</h1>
          <div className="prose prose-lg">
            <p className="mb-4">
              {t('biography.text')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

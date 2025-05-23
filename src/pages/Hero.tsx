import { useTranslation } from 'react-i18next';
import { BookPage } from '../ui/BookPage';

export const Hero = () => {
  const { t } = useTranslation();

  const jamilyaBook = {
    bookCover: '/src/assets/covers/Jamilya_cover.jpg',
    title: t('jamilya.title'),
    description: t('jamilya.description'),
    pdfUrl: '/src/assets/books/Jamilya.pdf',
    youtubeUrl: 'https://youtu.be/P5c2fSTa4yU',
    sheetMusicUrl: '/src/assets/books/Jamilya.pdf'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BookPage book={jamilyaBook} />
    </div>
  );
};

import { useTranslation } from 'react-i18next';
import { BookPage } from '../ui/BookPage';


export const Hero = () => {
  const { t } = useTranslation();

  const jamilyaBook = {
    bookCover: '/assets/covers/Jamilya_cover.jpg',
    title: t('jamilya.title'),
    description: t('jamilya.description'),
    pdfUrl: '/assets/books/Jamilya.pdf',
    youtubeUrl: 'https://youtu.be/P5c2fSTa4yU',
    sheetMusicUrl: '/assets/books/Jamilya.pdf'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BookPage book={jamilyaBook} />
    </div>
  );
};

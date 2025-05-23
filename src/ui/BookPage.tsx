import { useTranslation } from 'react-i18next';
import type { Book } from '../types/Book';

interface BookPageProps {
  book: Book;
}

export const BookPage = ({ book }: BookPageProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Book Cover */}
          <div className="w-full md:w-1/3">
            <img
              src={book.bookCover}
              alt={book.title}
              className="w-full h-auto rounded-lg shadow-md"
              loading='lazy'
            />
          </div>

          {/* Book Info */}
          <div className="w-full md:w-2/3 flex flex-col">

            <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
            <p className="text-gray-600 mb-6">
              {book.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              <a
                href={book.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-blue-600 border-2 bg-gray-200 text-black py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition-colors text-center"
              >
                {t('BookPage.book')}
              </a>
              <a
                href={book.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-red-600 border-2 bg-gray-200 text-black py-2 px-4 rounded hover:bg-red-600 hover:text-white transition-colors text-center"
              >
                {t('BookPage.listen')}
              </a>
              <a
                href={book.sheetMusicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-green-600 border-2 bg-gray-200 text-black py-2 px-4 rounded hover:bg-green-600 hover:text-white transition-colors text-center"
              >
                {t('BookPage.musicNotes')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

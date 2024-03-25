import { FC, useState } from 'react';
import { HeaderCountryProps } from './HeaderCountry.types';
import { ImageModal } from '../ImageModal';

export const HeaderCountry: FC<HeaderCountryProps> = ({ name, coatOfArms }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="flex gap-5 justify-center items-center mt-6">
      {coatOfArms.svg && (
        <img
          className="w-10 md:w-20 cursor-zoom-in"
          src={coatOfArms.svg}
          alt="Coat of arms"
          onClick={openModal}
        />
      )}
      <h1 className="text-3xl md:text-4xl font-bold text-red ">
        {name.official}
      </h1>
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        imageSrc={coatOfArms.svg}
      />
    </div>
  );
};

const AlumniModal = (id) => {
  const alumniData = JSON.parse(localStorage.getItem('alumni'));
  const alumni = alumniData.find((alumni) => alumni.id === id);
  const imageUrl = 'https://api-alumni-smk-boediluhur.herokuapp.com/images/v1/alumni';

  const { id: alumniID, foto, nama, jurusan, tahun_lulus, bekerja_sebagai, testimoni } = alumni;

  const alumniModal = document.createElement('div');
  alumniModal.classList.add('modal');
  alumniModal.innerHTML = `
    <div class="modal__content rounded-lg">
      <div class="modal__header flex justify-end p-4">
        <button class="modal__close">&times;</button>
      </div>
      <div class="modal__body text-center p-4">
        <div class="modal__image mb-4">
          <img src="${`${imageUrl}/${foto}`}" alt="${nama}" class="w-24 h-24 rounded-full object-cover">
        </div>
        <div class="modal__description">
          <h4 class="text-2xl mb-1">${nama}</h4>
          <p class="alumni--card--jurusan">Lulusan 
          <span class="font-semibold">${jurusan}</span>
          tahun ${tahun_lulus}</p>
          <p class="mb-4">
            Bekerja sebagai <span class="font-semibold">${bekerja_sebagai}</span>
          </p>
          <h5 class="text-lg">Testimoni:</h5>
          <p class="text-italic">" ${testimoni} "</p>
        </div>
      </div>
    </div>
  `;

  const modalClose = alumniModal.querySelector('.modal__close');
  modalClose.addEventListener('click', () => {
    document.querySelector('body').removeChild(alumniModal);
    document.querySelector('body').classList.remove('overflow-hidden');
  });

  alumniModal.addEventListener('click', () => {
    document.querySelector('body').removeChild(alumniModal);
    document.querySelector('body').classList.remove('overflow-hidden');
  });

  alumniModal.querySelector('.modal__content').addEventListener(
    'click',
    (e) => {
      e.stopPropagation();
    },
    false
  );

  return alumniModal;
};

export default AlumniModal;

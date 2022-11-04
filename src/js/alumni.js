import axios from 'axios';
import AlumniCard from './template/alumni-card';
import AlumniModal from './template/alumni-modal';

const apiUrl = 'https://api-alumni-smk-boediluhur.herokuapp.com/api/v1';

const Alumni = {
  init: () => {
    if (window.location.pathname === '/alumni-smk/' || window.location.pathname === '/alumni-smk') {
      Alumni.renderAlumni();
      console.log('Alumni rendered');
    }
  },

  renderAlumni: async () => {
    const cardContainer = document.getElementById('alumni-container');
    const response = await axios.get(apiUrl + '/alumni', {
      headers: {
        'x-api-key': 'ecdd6fb1-f0b0-44a6-a637-4fd64f162d1e'
      }
    });

    const alumni = response.data.data;

    localStorage.setItem('alumni', JSON.stringify(alumni));

    alumni.forEach((alumni) => {
      const alumniCard = AlumniCard(alumni);
      cardContainer.innerHTML += alumniCard;
    });

    Alumni.initModal();
  },

  initModal: () => {
    const detailButton = [...document.querySelectorAll('#detail-profil')];

    detailButton.forEach((button) => {
      const alumniId = button.dataset.profil;

      button.addEventListener('click', () => {
        const alumniModal = AlumniModal(alumniId);
        document.querySelector('body').appendChild(alumniModal);
        document.querySelector('body').classList.add('overflow-hidden');
        alumniModal.classList.add('modal--show');
      });
    });
  }
};

export default Alumni;

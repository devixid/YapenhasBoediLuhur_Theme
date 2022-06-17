const AlumniCard = (data) => {
  const { id, foto, nama, jurusan, tahun_lulus, bekerja_sebagai, testimoni } = data;

  const imageUrl = 'https://api-alumni-smk-boediluhur.herokuapp.com/images/v1/alumni';

  return `
    <div class="alumni--card p-4 w-full sm:w-1/2 md:w-1/3 text-center rounded-lg">
      <img src="${imageUrl + '/' + foto}" alt="${nama}" class="w-24 h-24 rounded-full object-cover" />
        
      <div class="alumni--card--body">
        <h4 class="alumni--card--name text-xl mb-2">${nama}</h4>
        <p class="alumni--card--jurusan">Lulusan 
        <span class="font-semibold">${jurusan}</span>
        tahun ${tahun_lulus}</p>
        <p>
          Bekerja sebagai <span class="font-semibold">${bekerja_sebagai}</span>
        </p>

        <button class="button button-primary rounded-lg mt-4" id="detail-profil" data-profil="${id}">
          Lihat profil
        </button>
      </div>
    </div>
  `;
};

export default AlumniCard;

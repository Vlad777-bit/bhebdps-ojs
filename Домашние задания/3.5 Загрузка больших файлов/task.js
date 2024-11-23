document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const progressBar = document.getElementById('progress');
  const form = e.target;
  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();

  // Событие для обработки прогресса
  xhr.upload.onprogress = (e) => {
    if (e.lengthComputable) {
      const progress = e.loaded / e.total;
      progressBar.value = progress;
    }
  };

  // Событие для завершения загрузки
  xhr.onload = () => {
    if (xhr.status === 201) {
      console.log('Файл успешно загружен', xhr.responseText);
      alert('Загрузка завершена!');

      progressBar.value = 1;
    } else {
      console.error('Ошибка загрузки', xhr.statusText);
      alert('Ошибка загрузки файла!');
    }
  };

  // Событие для обработки ошибок
  xhr.onerror = () => {
    console.error('Ошибка запроса');
    alert('Произошла ошибка во время загрузки файла!');
  };

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.send(formData);

  progressBar.value = 0;
});

const searchHandler = async (event) => {
    event.preventDefault();}
    
const search = document.querySelector('#search').value.trim();


if (search) {
    const response = await fetch('/api/job', {
      method: 'POST',
      body: JSON.stringify({ id, name, applied, link }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }

};

    document
    .querySelector('.#search form')
    .addEventListener('submit', searchHandler);


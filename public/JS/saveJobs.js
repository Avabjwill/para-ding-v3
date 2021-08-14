const saveJobHandler = async (event) => {
    event.preventDefault();

    const saveJobBtn = document.querySelector('#saveJob');

    const response = await fetch(`/`)

    };
}

document
    .querySelector('.saveJob')
    .addEventListener('submit', saveJobHandler)
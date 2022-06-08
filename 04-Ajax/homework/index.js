const PATH = 'http://localhost:5000/amigos';
const loading = $('img');
loading.hide();

const getAmigos = () => {
  loading.show();
  const lista = $('#lista');
  lista.empty();
  $.get(PATH, (data) => {
    for (const amigo of data) {
      let li = document.createElement('li');
      li.innerText = amigo.name;
      lista.append(li);
    }
    loading.hide();
  });
};
$('#boton').click(getAmigos);

$('#search').click(function () {
  let id = document.getElementById('input').value;
  $.get(`${PATH}/${id}`, function (data) {
    document.getElementById('amigo').innerHTML =
      'Nombre: ' + data.name + '. Edad: ' + data.age + '. Email: ' + data.email;
  });
});

$('#delete').click(function () {
  let id = document.getElementById('inputDelete').value;
  $.ajax({
    url: `${PATH}/${id}`,
    method: 'DELETE',
    success: () => (document.getElementById('success').innerHTML = 'ok'),
  });
});

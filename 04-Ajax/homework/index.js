const url = 'http://localhost:5000/amigos';

$('#boton').click(function () {
  let lista = document.getElementById('lista');
  lista.innerHTML = '';
  $.get(url, function (data) {
    data.forEach((element) => {
      let li = document.createElement('li');
      li.innerHTML = element.name;
      lista.appendChild(li);
    });
  });
});

$('#search').click(function () {
  let id = document.getElementById('input').value;
  $.get(`${url}/${id}`, function (data) {
    document.getElementById('amigo').innerHTML =
      'Nombre: ' + data.name + '. Edad: ' + data.age + '. Email: ' + data.email;
  });
});

$('#delete').click(function () {
  let id = document.getElementById('inputDelete').value;
  $.ajax({
    url: `${url}/${id}`,
    method: 'DELETE',
    success: () => (document.getElementById('success').innerHTML = 'ok'),
  });
});

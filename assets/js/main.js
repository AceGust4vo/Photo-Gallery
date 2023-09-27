$(document).ready(function() {
  // Adicionando um evento com jQuery
  // 1 - Forma
  $('header button').click(function() {
    $('form').slideDown();   //callback
  })

  $('#btn-cancel').click(function() {
    $('form').slideUp();
  })

  // 2 - Forma
  $('form').on('submit', function(e) {
    e.preventDefault();
    const newImageAddress = $('#input-search').val();
    const newItem = $('<li style="display: none"></li>');
    $(`<img src="${newImageAddress}" />`).appendTo(newItem);
    $(`
    <div class="overlay-image-link">
        <a href="${newImageAddress}" target="_blank" title="See full size image">
          See full size image
        </a>
    </div>
    `).appendTo(newItem);
    $(newItem).appendTo('ul');
    $(newItem).fadeIn(1000);
    $('#input-search').val('');
  })
})
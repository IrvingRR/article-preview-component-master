const $icon_open = document.getElementById('icon-open');
const $icon_close = document.getElementById('icon-close');
const $share_options = document.getElementById('share-options');

function open_options() {
    $share_options.classList.toggle('show');
}

function close_options() {
    $share_options.classList.remove('show');
}

$icon_open.addEventListener('click', open_options);
$icon_close.addEventListener('click', close_options);
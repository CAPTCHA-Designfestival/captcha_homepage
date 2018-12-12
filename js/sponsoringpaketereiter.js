var ReiterButton = document.querySelectorAll('#SponsoringPakete nav div');
var ReiterInhalt = document.querySelectorAll('#SponsoringPakete div section');

function AlleReiterInhalteAusblenden() {
  for (var x = 0; x < ReiterInhalt.length; x = x + 1) {
    ReiterInhalt[x].classList.remove('Anzeige');
  }

  for (var x = 0; x < ReiterButton.length; x = x + 1) {
    ReiterButton[x].classList.remove('Unterstreichen');
  }
}

for (var x = 0; x < ReiterButton.length; x = x + 1) {
  ReiterButton[x].addEventListener('click', function(e) {
    e.preventDefault();

    var ReiterThema = this.dataset.sponsoringpaket;

    var AktuellerReiterInhalt = document.querySelector('#SponsoringPakete div section[data-sponsoringpaket="' + ReiterThema + '"]');

    AlleReiterInhalteAusblenden();

    this.classList.toggle('Unterstreichen');

    AktuellerReiterInhalt.classList.toggle('Anzeige');
  });
}

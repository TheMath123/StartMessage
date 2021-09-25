const inputPhoneNumber = document.getElementById('phone');
const link = document.getElementById('link');
const btnCopy = document.getElementById('copy-link');
const btnCreateLink = document.getElementById('create-link')

//Ações dos botões
btnCreateLink.addEventListener('click', () => {
  editLink()
  openModal()
});

btnCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(createLink())
});

function openModal(){
  document.getElementById('content-link').style.display = 'flex';
}

function clearLink(){
  link.setAttribute('href', '#')
  link.removeChild()
}

function editLink(){
  clearLink()
  let address = createLink()
  let textLink = document.createTextNode(address)
  link.setAttribute('href', address)
  link.appendChild(textLink)
}

//Criar a string do endereço com o telefone
function createLink(){
  let phoneNumber = inputPhoneNumber.value;
  let linkApiWP = 'https://api.whatsapp.com/send?phone=+55'
  return linkApiWP + phoneNumber
}

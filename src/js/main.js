const inputPhoneNumber = document.getElementById('phone')
const btnCreateLink = document.getElementById('create-link')
const btnCopy = document.getElementById('copy-link')
const selectItem = document.getElementById('ddi')

//Formata número DDI e Telefone
function getPhoneNumber() {
  let ddi = selectItem.value
  let phoneNumber = inputPhoneNumber.value

  phoneNumber = phoneNumber.replace(/\D/gim, '');

  return `${ddi}${phoneNumber}`
}

//Ações dos botões
btnCreateLink.addEventListener('click', () => {
  editLink()
  openModal()
});

btnCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(createLink())
});

function openModal() {
  if (selectItem.value === '') {
    alert('DDI field cannot be empty.')
  } else {
    document.getElementById('content-link').style.display = 'flex';
  }
}

//Limpa div do link
function clearLink() {
  let div = document.getElementById('box-link')
  div.innerHTML = ''
}

//Cria modal do link gerado
function editLink() {
  clearLink()

  let textLink = document.createTextNode(createLink())

  let link = document.createElement('a')
  link.setAttribute('class', 'ipt')
  link.setAttribute('id', 'link')
  link.setAttribute('href', createApplicationLink())
  link.appendChild(textLink)

  document.getElementById('box-link').appendChild(link)
}

//Criar a string do endereço com o telefone
function createLink() {
  return 'https://wa.me/' + getPhoneNumber();
}

function createApplicationLink() {
  return "whatsapp://send/?phone=" + getPhoneNumber();
}

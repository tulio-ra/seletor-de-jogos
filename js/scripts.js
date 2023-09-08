
const showPopup = (sessionStorage.getItem("already-shown") == null) ? true : false;

const updateMessage = function () {
    // Swal.fire({
    //     title: 'Os novos jogos chegaram!',
    //     text: 'Os jogos foram refeitos para atender o padrão de qualidade atual do projeto.',
    //     confirmButtonColor: '#0B5ED7',
    //     confirmButtonText: 'Próximo',
    //     showCancelButton: true,
    //     cancelButtonText: 'Dispensar',
    //     imageUrl: 'assets/img/update-popup1.jpg',
    //     imageAlt: 'Custom image',
    // }).then((result) => {
    //     if(result.isConfirmed) {
    //         Swal.fire({
    //             title: 'Feitos com a magia da Godot',
    //             text: 'Uma game engine open-source e poderosa.',
    //             confirmButtonColor: '#3085d6',
    //             confirmButtonText: 'Ok',
    //             imageUrl: 'assets/img/update-popup2.jpg',
    //             imageAlt: 'Custom image',
    //         })
    //     }
    //         }) 
}

const tieUpdateMsg = function () {
    $(document).on('click', 'a.navbar-brand', function (e) {
        updateMessage();
    });
    sessionStorage.setItem("already-shown", true);
    $('.update-news').addClass('active');
};

var todayDate = new Date()
var popupExpireDate = new Date('2023/09/30')

if (showPopup && todayDate.getTime() < popupExpireDate.getTime()) {
    setTimeout(
        () => {
            updateMessage();
            tieUpdateMsg();
        },
        800);
}
else {
    tieUpdateMsg();
}

$(document).on('click', '.nav-link.warning', function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Você tem certeza?',
        text: 'Você irá sair do website.',
        imageUrl: 'assets/img/exit-warning.jpg',
        imageAlt: 'Custom image',
        showCancelButton: true,
        cancelButtonText: 'Voltar',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#0B5ED7'
    }).then((result) => {
        if (result.isConfirmed) {
            $(document).attr('location', $(this).attr('href'));
        }
    })
});


$(document).on('click', 'a:not([href="#!"]).play', function (e) {
    e.preventDefault();
    $('body').addClass('blur-body')
    setTimeout(() => {
        $(document).attr('location', $(this).attr('href'));
    }, 50);
});

$(document).on('click', '.easter-egg', function (e) {
    Swal.fire({
        title: 'Um desenvolvedor web',
        text: 'Estudante do 2° ano de informática do IFMG Campus Formiga.',
        imageUrl: 'assets/img/dev-info.jpg',
        imageAlt: 'Custom image',
        confirmButtonColor: '#0B5ED7',
        imageAlt: 'Custom image',
    })
});

$(document).on('click', 'a[href="#!"]', function (e) {
    Swal.fire({
        title: 'Este jogo está em manutenção',
        text: 'Volte mais tarde.',
        confirmButtonColor: '#0B5ED7',
        icon: 'error',
        imageAlt: 'Custom image',
    })
});






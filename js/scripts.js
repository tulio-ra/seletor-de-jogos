$(document).on('click', '.nav-link.warning', function(e){
    e.preventDefault();
    Swal.fire({
        title: 'Você tem certeza?',
        text: 'Você irá sair do website.',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Voltar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continuar!'
    }).then((result) => {
        if (result.isConfirmed) {
            $(document).attr('location', $(this).attr('href'));
        } 
    })
});

$(document).on('click', '.easter-egg', function(e){
    Swal.fire({
        title: 'Um desenvolvedor web!',
        text: 'Estudante do 2° ano de informática do IFMG Campus Formiga.',
        icon: 'info',
        imageAlt: 'Custom image',
    })
});


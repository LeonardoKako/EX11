$(document).ready(()=> {
    $('#carousel').slick({
        autoplay: true,
        arrows: false
    })
$('#telefone').mascara('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mascara('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mascara('00000-000', {
    placeholder: '012345-678'
})

$('#form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
    submitHandler: function(form){
        alert('Ola')
    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos.`)
        }
        
    }
}})
});
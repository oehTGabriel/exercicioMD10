$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
    
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            },
            endereço:{
                required: true
            },
            cep:{
                required: true
            }
        }, 
        submitHandler: function(form){
            console.log(form);
        }, 
        invalidHandler: function(e, v){
            let camposInvalidos = v.numberOfInvalids();
            if (camposInvalidos){
                alert(`Existem ${camposInvalidos} campos inválidos`);
            }
        }
    });

});
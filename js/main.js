
$(document).ready(function(){

    //Precios actuales:
    const precioTinto = 450;
    const precioBlanco = 350;
    const precioRosado = 400;
    const precioEspumante = 625;
    const precioC1 = 750;
    const precioC2 = 700;
    const precioC3 = 1400;
    const precioC4 = 1100;
    const descuentoAPartirDe = 3000;

    
    //Funcion para cada subtotal:
    function mostrarTotal(cantidad, totalidad, subtotalidad, precio, nombreDeMemoria){
        if(cantidad.val() < 0){
            totalidad.html('');
            totalidad.append(`Ingrese una cantidad válida`);

            //Animacion
            totalidad.fadeIn().delay(1000).fadeOut();
        }else{
            //Mostrar el subtotal
            subtotalidad = cantidad.val() * precio;
            totalidad.html('');
            totalidad.append(`<span> Total: $ </span> <b id="subtotal1"> ${subtotalidad}</b>`);

            //Mostrar cartel si la cant es mayor a cero
            if (cantidad.val()>0){
                $('#toast').html('Se agregó un elemento al carrito');
                $('#toast').fadeIn(500).delay(1000).fadeOut(2000);
            }

            //Animacion
            totalidad.fadeIn().delay(1000).fadeOut();

            //Guardar en memoria
            sessionStorage.setItem(nombreDeMemoria, subtotalidad);
        }
    }

    //Tintos
    const cantTintos = $('#cantVT');
    const agregarCarritoTintos = $('#carritoVT');
    const totalDeTintos = $('#totalTintos');
    const subtotalTintos = cantTintos.val()*precioTinto;
    const nombreDeMemoriaT = 'stTintos';

    agregarCarritoTintos.click(function(){
        mostrarTotal(cantTintos, totalDeTintos, subtotalTintos, precioTinto, nombreDeMemoriaT );
    })
    cantTintos.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantTintos, totalDeTintos, subtotalTintos, precioTinto, nombreDeMemoriaT );
        }
    })


    //Blancos
    const cantBlancos = $('#cantVB');
    const agregarCarritoBlancos = $('#carritoVB');
    const totalDeBlancos = $('#totalBlancos');
    const subtotalBlancos = cantBlancos.val()*precioBlanco;
    const nombreDeMemoriaB = 'stBlancos';

    agregarCarritoBlancos.click(function(){
        mostrarTotal(cantBlancos, totalDeBlancos, subtotalBlancos, precioBlanco, nombreDeMemoriaB);
    })
    cantBlancos.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantBlancos, totalDeBlancos, subtotalBlancos, precioBlanco, nombreDeMemoriaB);
        }
    })

    //Rosados
    const cantRosados = $('#cantVR');
    const agregarCarritoRosados = $('#carritoVR');
    const totalDeRosados = $('#totalRosados');
    const subtotalRosados = cantRosados.val()*precioRosado;
    const nombreDeMemoriaR = 'stRosados';

    agregarCarritoRosados.click(function(){
        mostrarTotal(cantRosados,totalDeRosados, subtotalRosados, precioRosado, nombreDeMemoriaR);
    })
    cantRosados.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantRosados,totalDeRosados, subtotalRosados, precioRosado, nombreDeMemoriaR);
        }
    })

    //Espumante
    const cantEspumante = $('#cantVE');
    const agregarCarritoEspumantes = $('#carritoVE');
    const totalDeEspumantes = $('#totalEspumantes');
    const subtotalEspumantes = cantEspumante.val()*precioEspumante;
    const nombreDeMemoriaE = 'stEspumantes';

    agregarCarritoEspumantes.click(function(){
        mostrarTotal(cantEspumante, totalDeEspumantes, subtotalEspumantes, precioEspumante, nombreDeMemoriaE);
    })
    cantEspumante.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantEspumante, totalDeEspumantes, subtotalEspumantes, precioEspumante, nombreDeMemoriaE);
        }
    })

    //Combo1
    const cantCombo1 = $('#cantC1');
    const agregarCarritoCombo1 = $('#carritoC1');
    const totalCombo1 = $('#totalCombo1');
    const subtotalCombo1 = cantCombo1.val()*precioC1;
    const nombreDeMemoriaC1 = 'stCombo1';

    agregarCarritoCombo1.click(function(){
        mostrarTotal(cantCombo1, totalCombo1, subtotalCombo1, precioC1, nombreDeMemoriaC1);
    })
    cantCombo1.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantCombo1, totalCombo1, subtotalCombo1, precioC1, nombreDeMemoriaC1);
        }
    })

    //Combo2
    const cantCombo2 = $('#cantC2');
    const agregarCarritoCombo2 = $('#carritoC2');
    const totalCombo2 = $('#totalCombo2');
    const subtotalCombo2 = cantCombo2.val()*precioC2;
    const nombreDeMemoriaC2 = 'stCombo2';

    agregarCarritoCombo2.click(function(){
        mostrarTotal(cantCombo2, totalCombo2, subtotalCombo2, precioC2, nombreDeMemoriaC2);
    })
    cantCombo2.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantCombo2, totalCombo2, subtotalCombo2, precioC2, nombreDeMemoriaC2);
        }
    })

    //Combo3
    const cantCombo3 = $('#cantC3');
    const agregarCarritoCombo3 = $('#carritoC3');
    const totalCombo3 = $('#totalCombo3');
    const subtotalCombo3 = cantCombo3.val()*precioC3;
    const nombreDeMemoriaC3 = 'stCombo3';

    agregarCarritoCombo3.click(function(){
        mostrarTotal(cantCombo3, totalCombo3, subtotalCombo3, precioC3, nombreDeMemoriaC3);
    })
    cantCombo3.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantCombo3, totalCombo3, subtotalCombo3, precioC3, nombreDeMemoriaC3);
        }
    })

    //Combo4
    const cantCombo4 = $('#cantC4');
    const agregarCarritoCombo4 = $('#carritoC4');
    const totalCombo4 = $('#totalCombo4');
    const subtotalCombo4 = cantCombo4.val()*precioC4;
    const nombreDeMemoriaC4 = 'stCombo4';

    agregarCarritoCombo4.click(function(){
        mostrarTotal(cantCombo4, totalCombo4, subtotalCombo4, precioC4, nombreDeMemoriaC4);
    })
    cantCombo4.keypress(function(e){
        if(e.which == 13){
            mostrarTotal(cantCombo4, totalCombo4, subtotalCombo4, precioC4, nombreDeMemoriaC4);
        }
    })



    //TOTAL:
    //Cantidad total
    const totalTotal = $('#total');

    function total(T, B, R, E, c1, c2, c3, c4) {
        return (T+B+R+E+c1+c2+c3+c4);
    }
    //Descuento
    const descQuince = $('#totalQuince');
    function descuentoQuince (resultado){
        return (resultado*0.85);
    }

    $('#botonOcultar').hide();
    $('#finalizarCompra').hide();

    //Mostrar el total al hacer click
    totalTotal.click(function(){
        $('#subNav').css("background-color", "white");
        $('#subNav').show();
        $('#total').hide();
        $('#botonTerminar').append(`<div id="finCompra"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Finalizar compra:</button></div>`);


        $('#botonOcultar').show();
        $('#estiloBotonOcultar').click(function(){

            $('#subNav').hide();
            $('#total').html('');
            $('#total').append(`<div id="total">Mostrar total:</div>`);
        })

        const totalTinto = parseInt(sessionStorage.getItem('stTintos'))||0;
        const totalBlanco = parseInt(sessionStorage.getItem('stBlancos'))||0;
        const totalRosado = parseInt(sessionStorage.getItem('stRosados'))||0;
        const totalEspumante = parseInt(sessionStorage.getItem('stEspumantes'))||0;
        const totalComboUno = parseInt(sessionStorage.getItem('stCombo1'))||0;
        const totalComboDos = parseInt(sessionStorage.getItem('stCombo2'))||0;
        const totalComboTres = parseInt(sessionStorage.getItem('stCombo3'))||0;
        const totalComboCuatro = parseInt(sessionStorage.getItem('stCombo4'))||0;  

        const resultado = total ((totalTinto), (totalBlanco), (totalRosado), (totalEspumante), (totalComboUno), (totalComboDos), (totalComboTres), (totalComboCuatro) );

        $('#precioTotal').html('');
        $('#precioTotal').append(`<div><img src="https://img.icons8.com/material-outlined/000000/shopping-cart--v1.png"/> Total de la compra: $ ${resultado}</div>`);
    
        const descuento15 = descuentoQuince (resultado); 

        if(resultado > descuentoAPartirDe){
            descQuince.html('');
            descQuince.append(`<div><img src="https://img.icons8.com/fluency-systems-regular/000000/discount.png"/> Total con descuento: $ ${descuento15}</div>`);
        } else{
            descQuince.html('')
        }

        
        //Finalizar compra:
        $('#finCompra').click(function(){
            $('#finalizarCompra').show();

        })

        //Comprar:
        $('#compraFinalizada').click(function(){
            $('.modal-content').append(`<div>Compra realizada con exito</div>`);
        })
        

        
        //Borrar los valores luego de hacer click
        totalDeTintos.html('');
        totalDeBlancos.html('');
        totalDeRosados.html('');
        totalDeEspumantes.html('');
        totalCombo1.html('');
        totalCombo2.html('');
        totalCombo3.html('');
        totalCombo4.html('');
        
        //Borrar el session storage
        sessionStorage.clear();
    })


    


    //Descripcion de cada producto:

    //No funciona:

    // function verDescrip(id, lugar){
    //     $.getJSON('../productos.json', function(respuesta, status){
    //         if(status === 'success'){
    //             respuesta.forEach((productos=>{
    //                 if(`${productos.id}`== id){
    //                     lugar.html('');
    //                     lugar.append(`Descripcion del producto: ${productos.descripcion}`);
    //                     lugar.fadeIn().delay(5000).fadeOut();
    //                 } 
    //             }))
    //         }
    //     })
    // }

    // const lugarDesc = $('#mostrarDescripT');
    // $('#descripT').click(verDescrip(1, lugarDesc));

    $('#descripT').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '1'){
                        $('#mostrarDescripT').html('');
                        $('#mostrarDescripT').append(`Descripcion del producto: ${productos.descripcion}`);
                        $('#mostrarDescripT').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripB').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '2'){
                        $('#mostrarDescripB').html('');
                        $('#mostrarDescripB').append(`Descripcion del producto: ${productos.descripcion}`);
                        $('#mostrarDescripB').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripR').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '3'){
                        $('#mostrarDescripR').html('');
                        $('#mostrarDescripR').append(`Descripcion del producto: ${productos.descripcion}`);
                        $('#mostrarDescripR').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripE').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '4'){
                        $('#mostrarDescripE').html('');
                        $('#mostrarDescripE').append(`Descripcion del producto: ${productos.descripcion}`);
                        $('#mostrarDescripE').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripC1').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '5'){
                        $('#mostrarDescripC1').html('');
                        $('#mostrarDescripC1').append(`Descripcion del producto: ${productos.descripcion}`);
                        $('#mostrarDescripC1').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripC2').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '6'){
                        $('#mostrarDescripC2').html('');
                        $('#mostrarDescripC2').append(`Descripcion del producto: ${productos.descripcion}`);
                        $('#mostrarDescripC2').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripC3').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '7'){
                        $('#mostrarDescripC3').html('');
                        $('#mostrarDescripC3').append(`Descripcion del producto: ${productos.descripcion}`);
                        $('#mostrarDescripC3').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })

    $('#descripC4').click(function(){
        $.getJSON('../productos.json', function(respuesta, status){
            if(status === 'success'){
                respuesta.forEach((productos=>{
                    if(`${productos.id}`=== '8'){
                        $('#mostrarDescripC4').html('');
                        $('#mostrarDescripC4').append(`Descripcion del producto: ${productos.descripcion}`);
                        $('#mostrarDescripC4').fadeIn().delay(5000).fadeOut();
                    } 
                }))
            }
        })
    })


//Fin del ready
})
$(document).ready(function(){

    $('#sincronizar').click(function(e){
        console.log("soy sincronizar");
        e.preventDefault();
        $.ajax({
            url: 'action',
            type: 'GET',
            success: function(response){
                console.log(response);
            }
        })
    });
    $('#personal').click(function(e){
        e.preventDefault();
        $(location).attr('href', "personal");
        $.ajax({
            url : 'personal',
            type : 'GET',
            success: function(response){

            }
        });
     });

     $('#TI').click(function(e){
        e.preventDefault();
        $(location).attr('href',"login");
        $.ajax({
            url : 'login',
            type : 'GET',
            success: function(response){

            }
        });

     });

    $('#activar').click(function(e){
        e.preventDefault();
        $.ajax({
            url: 'activar',
            type: 'GET',
            success: function(response){
                console.log(response);
            }
        })
    });
   
   /* $.ajax({
        url: 'lista',
        type: 'GET',   
        success:  function(response){
            let tasks = JSON.parse(response);
            let template = '';
            tasks.forEach(task => {
                template += ` 
                    <tr>
                        <td> ${task.id} </td>
                        <td> ${task.NameUser} </td>
                        <td> ${task.Grupo} </td>
                        <td> ${task.Fecha} </td>
                    </tr>
                `
            });
            $('#body-table').html(template);
           }
    });
    */
});

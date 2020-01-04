$(document).ready(function(){
var ID1;


    $('#first').click(function(e){
        e.preventDefault();
        $(this).addClass("active");
        $('#second').removeClass("active");
        $('#third').removeClass("active");
        $.ajax({
            url: 'asistencia',
            type: 'GET',
            success : function(response){
                $('#main').html(response)
            }
        })

         ID1 = setInterval(function(){
            $.ajax({
                url: 'lista',
                type : 'GET',
                success : function(response){
                    let tasks = JSON.parse(response);
                    console.log(tasks);
                    let template = '';
                   
                    tasks.forEach(task => {
                        console.log(task.fields.NameUser);
                        let current_datetime = new Date(task.fields.Fecha);
                        let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + (current_datetime.getMinutes()<10?'0':'')+current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 
                        template += ` 
                            <tr>
                                <td> ${task.fields.id} </td>
                                <td> ${task.fields.NameUser} </td>
                                <td> ${task.fields.Grupo} </td>
                                <td> ${formatted_date} </td>
                            </tr>
                        `
                    });
                    $('#body-table').html(template);
                   }
            });
        },500);
        
    });
    $('#second').click(function(e){
        e.preventDefault();
        clearInterval(ID1);
        $(this).addClass("active");
        $('#first').removeClass("active");
        $('#third').removeClass("active");

    });
    $('#third').click(function(e){
        e.preventDefault();
        $(this).addClass("active");
        $('#second').removeClass("active");
        $('#first').removeClass("active");
    });

   

})
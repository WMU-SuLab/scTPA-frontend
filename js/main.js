window.onload = function () {

  $("#search").click(function () {
      var emailDress;
      var jobId;

      $("#tabletest").html("");
      if ($("#form-control option:selected").val()=="email"){
          emailDress = $("#exampleInputEmail1").val();
          if (emailDress != ""){
              var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
              if (!reg.test(emailDress)){
                  alert("Please recheck your email address！");
              }else {
                  $.ajax({
                      url:"http://34.210.231.18:8080/search?email="+emailDress,
                      dataType:"json",
                      type:"GET",
                      success:function (data) {
                          if (data==""){
                              $("#tabletest").html("");
                              alert("Please enter your email address correctly");
                          }else {
                              $("#tabletest").append('<tr>'+'<th>'+"job ID"+'</th>'+'<th>'+"Date"+'</th>'+'<th>'+"Status"+'</th>'+'<th>'+"Result"+'</th>'+'</tr>');
                              for (var i=0;i<data.length;i++){
                                  var tipContent;
                                  var timeStr = data[i].date.split("T")[0];
                                  var status = data[i].status.charAt(0).toUpperCase()+data[i].status.slice(1);
                                  tipContent = '<td>'+data[i].jobId+'</td>'+'<td>'+timeStr+'</td>'+'<td>'+status+'</td>'+'<td><a href="'+data[i].link+'">'+"Result page"+'</a></td>';
                                  $("#tabletest").append('<tr>'+tipContent+'</tr>');
                              }
                          }

                      },
                      error: function(XMLHttpRequest, textStatus, errorThrown) {
                          alert(XMLHttpRequest.status);
                          alert(XMLHttpRequest.readyState);
                          alert(textStatus);
                      }

                  })

              }
          }
      }else if($("#form-control option:selected").val()=="job"){

          jobId= $("#exampleInputEmail1").val();
          if (jobId!=""){
              var numRegex =/^[0-9]*$/;
              if (!numRegex.test(jobId)){
                  alert("only number!")
              }else {

                  $.ajax({
                      url:"http://34.210.231.18:8080/search?jobId="+jobId,
                      dataType:"json",
                      type:"GET",
                      success:function (data) {
                          if (data==""){
                              $("#tabletest").html("");
                              alert("Please enter your jobId correctly");
                              $("#exampleInputEmail1").val="";
                          }else {
                              $("#tabletest").append('<tr>'+'<th>'+"job ID"+'</th>'+'<th>'+"Date"+'</th>'+'<th>'+"Status"+'</th>'+'<th>'+"Result"+'</th>'+'</tr>');

                              for (var i=0;i<data.length;i++){
                                  var tipContent;
                                  var timeStr = data[i].date.split("T")[0];
                                  var status = data[i].status.charAt(0).toUpperCase()+data[i].status.slice(1);
                                  tipContent = '<td>'+data[i].jobId+'</td>'+'<td>'+timeStr+'</td>'+'<td>'+status+'</td>'+'<td><a href="'+data[i].link+'">'+"Result page"+'</a></td>';
                                  $("#tabletest").append('<tr>'+tipContent+'</tr>');
                              }
                          }
                      },
                      error: function(XMLHttpRequest, textStatus, errorThrown) {
                          alert(XMLHttpRequest.status);
                          alert(XMLHttpRequest.readyState);
                          alert(textStatus);
                      }

                  })
              }




          }

      }



      //建立ajax通讯

  });

    $("#reset").click(function () {
        $("#exampleInputEmail1").val = "";
        $("#tabletest").html("");
    })
};
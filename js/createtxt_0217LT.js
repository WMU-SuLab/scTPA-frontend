window.onload = function () {
    $("#sumbit").click(function () {

       var email = $("#email").val();
       if (email != ""){
           var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
           if (!reg.test(email)){
               alert("Please recheck your email address！");
           }
       }
    });
    window.onpageshow = function (event) {
        if (event.persisted|| window.performance &&
            window.performance.navigation.type == 2) {
            window.location.reload();
        }
    };
};

/**判断上传文件文件格式**/
var filePath ="";
var fileType ="";
function upload(){
    var fileSize =  document.getElementById('scRnaSeqProfileInput').files[0]; //获得文件大小；
    filePath = $('#scRnaSeqProfileInput').val().toLowerCase().split(".");
    fileType =  filePath[filePath.length - 1]; //获得文件结尾的类型如 zip rar 这种写法确保是最后的
    console.log(fileSize);
    console.log(fileType);
    if(fileSize.size>524288000){
        alert('Error! Please upload files not exceeding 500M.');
    }
}
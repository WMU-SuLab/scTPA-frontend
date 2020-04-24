window.onload = function () {

    $("#sumbit").click(function () {

       var email = $("#email").val();
        if (email != ""){
            var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if (!reg.test(email)){
                alert("Please recheck your email address！");
            }
        }
    })
};
window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
};
/**判断上传文件文件**/
var filePath ="";
var fileType ="";
function upload(){
    var fileSize =  document.getElementById('scRnaSeqProfileInput').files[0]; //获得文件大小；
    filePath = $('#scRnaSeqProfileInput').val().toLowerCase().split(".");
    fileType =  filePath[filePath.length - 1]; //获得文件结尾的类型如 zip rar 这种写法确保是最后的
    console.log(fileSize);
    console.log(fileType);
    if(fileSize.size>524288000){
        alert('错误！请上传不超过500M的文件');
    }
}
function changFile(){
    if (loadExample1===1){
        // console.log(1);
        $("#cellTypes").prop("checked", false);
        //添加样式
        var icheckbox_flat_blue1 = $(".icheckbox_flat-blue")[0];
        $(icheckbox_flat_blue1).attr("class","icheckbox_flat-blue");

        $("#cellTypeLabelInput").fileinput("clear");
        $("#cellTypeLabelInput").fileinput("disable");
        $("#cellTypes").focus();
        $("#example").val("");

        var icheckbox_flat_blue3 = $(".icheckbox_flat-blue")[2];
        $(icheckbox_flat_blue3).attr("class","icheckbox_flat-blue");
        loadExample1=0;
    }

}

function changeCell() {
    if (loadExample2===1){
        $("#tpmOrCpmOrFpkmInput").fileinput("clear");
        loadExample2=0;
    }else if (loadExample1===1){
        $("#scRnaSeqProfileInput").fileinput("clear");
        loadExample1=0;
    }
}

function changTpm() {
    if (loadExample1===1){
        // console.log(1);
        $("#cellTypes").prop("checked", false);
        //添加样式
        var icheckbox_flat_blue1 = $(".icheckbox_flat-blue")[0];
        $(icheckbox_flat_blue1).attr("class","icheckbox_flat-blue");

        $("#cellTypeLabelInput").fileinput("clear");
        $("#cellTypeLabelInput").fileinput("disable");
        $("#cellTypes").focus();
        $("#example").val("");
        loadExample1=0;
    }
}

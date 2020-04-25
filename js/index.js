// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt){ // author: meizz
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function writeToScreen(message)
{
    var pre = document.createElement("p");
    //pre.style.wordWrap = "break-word";
    pre.innerHTML = message;

    output = document.getElementById("output");
    output.appendChild(pre);
}

var jobId="example1";
function WebSocketTest() {
    // 新建WebSocket连接
    //var ws = new WebSocket("ws://localhost:4200");
    //var ws = new WebSocket("ws://144.34.247.192:4200");
    //var ws = new WebSocket("ws://128.1.137.15:4200");
    //var ws = new WebSocket("ws://223.95.97.176:4200");
    //var ws = new WebSocket("ws://172.16.253.32:4200");
    //var ws = new WebSocket("ws://sctpa.bio-data.cn:4200");
    var ws = new WebSocket("ws://34.210.231.18:4200");

    // 连接打开事件，打开连接后发送数据
    ws.onopen = function () {
        let time = new Date().Format("yyyy-MM-dd hh:mm:ss");
        // 使用send()方法发送数据
        writeToScreen(time +" Job has entered the job queue.");
        $("#progressBar").css("width","3%");
        $("#progressBar").text("3%");
        //ws.send("Start my job?args=123456");//把参数附加在这里传过去
        //alert("数据发送中:\n这是测试数据");
        ws.send("?jobId example1?--species homo?--data_type count?-f /var/www/sctpa.bio-data.cn/job_server/data/example1/mat_500.csv?--pathway_database kegg?--normalize none?--min_cells 2?--min_features 200?--imputation TRUE?--pas_method ssgsea?--cluster_method seurat?--seurat_dims 15?--seurat_resolution 0.5?--marker_method bimod?-o /var/www/sctpa.bio-data.cn/job_server/data/example1/?--cellType NULL?--user_pathway NULL");
        //ws.send("Start my job?args=123456");
    };

    var errorFlag=0;
    ws.onerror = function () {
        errorFlag=1;
        $("#runningGear").hide();
        writeToScreen("Error, disconnected with job server. An Internet problem occurred.");
        writeToScreen("You can go to <a href='index.html' target='_self'>home page</a> to rerun the job later.");
    };

    // 接收数据事件，event的data就是返回数据
    ws.onmessage = function (evt) {
        //var received_msg = evt.data;
        //alert("数据已接收:\n" + received_msg);
        // 作为一个好习惯，在接收完数据后就关闭连接，这样可以减少服务器的负担
        //ws.close();
        //writeToScreen('<span style="color: blue;"> ' + evt.data+'</span>');

        /*let time = new Date().Format("yyyy-MM-dd hh:mm:ss");
        writeToScreen(time+ ' ' + evt.data);*/

        /*if(evt.data.indexOf("pathway")>0)
        {
            //取出pathway
            let pathwayArray=evt.data.split('?');
            writeToScreen(evt.data);
            for(let i = 1, len = pathwayArray.length; i < len; i++){
                //渲染到下拉框和对应的3张图片，图片先隐藏起来，在下拉框中选择pathway时，再显示对应的图片
                $("#pathwaySelect").append( "<option value='"+pathwayArray[i]+"'>"+pathwayArray[i]+"</option>" );
            }
            return;
        }
*/
        if(evt.data.indexOf("queued")>0)
        {
            let time = new Date().Format("yyyy-MM-dd hh:mm:ss");
            writeToScreen(time+ ' ' + evt.data);
        }
        else if(evt.data.indexOf("1/5")>0)
        {
            let time = new Date().Format("yyyy-MM-dd hh:mm:ss");
            writeToScreen(time+ ' ' + evt.data);
            $("#progressBar").css("width","20%");
            $("#progressBar").text("20%");
        }
        else if(evt.data.indexOf("2/5")>0)
        {
            let time = new Date().Format("yyyy-MM-dd hh:mm:ss");
            writeToScreen(time+ ' ' + evt.data);
            $("#progressBar").css("width","40%");
            $("#progressBar").text("40%");
        }
        else if(evt.data.indexOf("3/5")>0)
        {
            let time = new Date().Format("yyyy-MM-dd hh:mm:ss");
            writeToScreen(time+ ' ' + evt.data);
            $("#progressBar").css("width","60%");
            $("#progressBar").text("60%");
        }
        else if(evt.data.indexOf("4/5")>0)
        {
            let time = new Date().Format("yyyy-MM-dd hh:mm:ss");
            writeToScreen(time+ ' ' + evt.data);
            $("#progressBar").css("width","80%");
            $("#progressBar").text("80%");
        }
        else if(evt.data.indexOf("5/5")>0)
        {
            let arr=evt.data.split('?');

            let time = new Date().Format("yyyy-MM-dd hh:mm:ss");
            writeToScreen(time+ ' ' + arr[0]);


            $("#downloadPathwayActivityScore").attr("href","job_server/data/"+jobId+"/pas.csv");
            $("#downloadMarkerPathway").attr("href","job_server/data/"+jobId+"/pas_markers.csv");

            $("#tsnePathway").attr("src","job_server/data/"+jobId+"/tsne_pathway.png");
            $("#heatmap").attr("src","job_server/data/"+jobId+"/Heatmap.png");
            $('#bubbleButton').on('click', function() {
                $("#heatmap").attr("src","job_server/data/"+jobId+"/Bubble.png");
                $('#bubbleButton').attr("class","btn btn-primary");
                $('#heatmapButton').attr("class","btn btn-secondary");
            });
            $('#heatmapButton').on('click', function() {
                $("#heatmap").attr("src","job_server/data/"+jobId+"/Heatmap.png");
                $('#bubbleButton').attr("class","btn btn-secondary");
                $('#heatmapButton').attr("class","btn btn-primary");
            });

            for(let i = 2, len = arr.length; i < len; i++){
                //渲染到下拉框和对应的3张图片，图片先隐藏起来，在下拉框中选择pathway时，再显示对应的图片
                $("#pathwaySelect").append( "<option value='"+arr[i]+"'>"+arr[i]+"</option>" );
            }
            $("#fet").attr("src","job_server/data/"+jobId+"/"+arr[2]+"/"+arr[2]+".fet.png");
            $("#vil").attr("src","job_server/data/"+jobId+"/"+arr[2]+"/"+arr[2]+".vil.png");
            $("#het").attr("src","job_server/data/"+jobId+"/"+arr[2]+"/"+arr[2]+".het.png");
            $('#pathwaySelect').on('change', function() {
                //alert( this.value );
                $("#fet").attr("src","job_server/data/"+jobId+"/"+this.value+"/"+this.value+".fet.png");
                $("#vil").attr("src","job_server/data/"+jobId+"/"+this.value+"/"+this.value+".vil.png");
                $("#het").attr("src","job_server/data/"+jobId+"/"+this.value+"/"+this.value+".het.png");
            });

            //表格
            $('#table1').bootstrapTable({
                url: "job_server/data/"+jobId+"/"+'T-SNE-2D.json',
                height:"450",
                columns: [{
                    field: 'cellName',
                    title: 'cellName',
                    //width:'100'
                }, {
                    field: 'tSNE_1',
                    title: 'tSNE_1',
                    //width:'100'
                }, {
                    field: 'tSNE_2',
                    title: 'tSNE_2',
                    //width:'100'
                }, {
                    field: 'cell_type',
                    title: 'cell_type',
                    //width:'100'
                }]
            });

            $('#table2').bootstrapTable({
                url: "job_server/data/"+jobId+"/"+'T-SNE-3D.json',
                height:"400",
                columns: [{
                    field: 'cellName',
                    title: 'cellName',
                    //width:'100'
                }, {
                    field: 'tSNE_1',
                    title: 'tSNE_1',
                    //width:'100'
                }, {
                    field: 'tSNE_2',
                    title: 'tSNE_2',
                    //width:'100'
                }, {
                    field: 'tSNE_3',
                    title: 'tSNE_3',
                    //width:'100'
                }, {
                    field: 'cell_type',
                    title: 'cell_type',
                    //width:'100'
                }]
            });

            $("#progressBar").text("100%");
            $("#progressBar").css("width","100%");
            jobFinished=1;
            ws.close();
            //$("#img1").attr("src", "sctpa.bio-data.cn/job_server/data/example1/expression.png");
            setTimeout(function () {
                $("#downloadButtons").show();
                //$('.collapse2').collapse('hide');/*collapseAllCards();*/
                //$('.collapse3').collapse('hide');
                $('#collapse2').collapse('hide');
                $('#collapse3').collapse('hide');

                $('#collapse2').collapse('show');
                $('#collapse3').collapse('show');

            }, 4000);

        }
        else if(evt.data.indexOf("failed")>0)
        {
            // TODO job运行失败怎么办？

        }

    };

    // 关闭连接后要做的事
    var jobFinished=0;
    ws.onclose = function () {
        if(errorFlag==0)
        {
            $("#runningGear").hide();
            if(jobFinished==0)
            {
                writeToScreen("Disconnected with server. Please go to <a href='index.html' target='_self'>home page</a> to rerun your job.");
            }
            else
            {
                writeToScreen("Job finished!");
            }
        }
    };
}

function collapseAllCards(){
    //$("#img1").attr("src", "job_server/data/example1/expression.png");

    var p = document.createElement("p");
    //pre.style.wordWrap = "break-word";
    p.innerHTML = '<p style="border: 2px solid #E6E6FA;margin-left:20px;padding:8px;border-radius: 4px;text-align: left;">Clinical mutations were mapped to the allosteric or functional sites of 1650 proteins. This analysis describes the location profile of the mutations on the mapped proteins. The waterfall plot shows mutation distribution on four types of functional areas (allosteric site, potential allosteric site, orthosteric site and other regions) on the structure of proteins mapped from gene. Stacked bar graph provides mutation frequency against each mapped gene.</p>\n'+
        '<img id="img1" src="job_server/data/example1/tsne_pathway.png" style="width: 60%;height: 500px;"/>'+
        '<div style="margin-bottom: 10px;">Download pathway activity score <a href="/job_server/downloadExample.php?fileName=mat_500.csv"><i class="fa fa-download"></i></a></div>\n';

    card1 = document.getElementById("card1");
    card1.appendChild(p);

    p = document.createElement("p");
    p.innerHTML = '<p style="border: 2px solid #E6E6FA;margin-left:20px;padding:8px;border-radius: 4px;text-align: left;">Clinical mutations were mapped to the allosteric or functional sites of 1650 proteins. Th. The waterfall plot shows mutation distribution on four types of functional areas (allosteric site, potential allosteric site, orthosteric site and other regions) on the st</p>\n'+
        '<img id="img2" src="job_server/data/example1/Heatmap.png" style="width: 80%;height: 700px;"/>' +
        '<br/>' +
        '<p style="border: 2px solid #E6E6FA;margin-left:20px;padding:8px;border-radius: 4px;text-align: left;">Clinical mutations were mapped to the allosteric or functional sites of 1650 proteins. </p>\n'+
        '<img id="img3" src="job_server/data/example1/feature.png" style="width: 60%;height: 500px;"/>'+
        '<div>Download marker pathway <a href="/job_server/downloadExample.php?fileName=mat_500.csv"><i class="fa fa-download"></i></a></div>\n';

    card2 = document.getElementById("card2");
    card2.appendChild(p);

    $('.collapse').collapse();
}

$(document).ready(function()
{
    $("#downloadButtons").hide();

    $('#collapse1').on('hidden.bs.collapse', function()
    {
        $('#card0Icon').attr("class", "fa fa-angle-right");
    });

    $('#collapse1').on('show.bs.collapse', function()
    {
        $('#card0Icon').attr("class", "fa fa-angle-down");
    });

    $('#collapse2').on('hidden.bs.collapse', function()
    {
        $('#card1Icon').attr("class", "fa fa-angle-right");
    });

    $('#collapse2').on('show.bs.collapse', function()
    {
        $('#card1Icon').attr("class", "fa fa-angle-down");
    });

    $('#collapse3').on('hidden.bs.collapse', function()
    {
        $('#card2Icon').attr("class", "fa fa-angle-right");
    });

    $('#collapse3').on('show.bs.collapse', function()
    {
        $('#card2Icon').attr("class", "fa fa-angle-down");
    });

    /*let time=new Date().Format("yyyyMMddhhmmss");
    $("#jobId").text(time);*/
    time=new Date().Format("yyyy-MM-dd hh:mm:ss");
    $("#startTime").text(time);

    window.addEventListener("load", WebSocketTest, false);
    //collapseAllCards();
    //$('.collapse').collapse();
});

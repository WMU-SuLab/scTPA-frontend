/*
Example files
*/
var container = document.getElementById("container")
var words = document.getElementById("words")
var $table = $('#table')
var $table1 = $("#table1")
var selections = []
var tSne2dTable1 = document.getElementById("tSne2dTable1")
/*var clustContainer = document.getElementsByClassName("clust_container")[0]
var d3SliderHandle = document.getElementsByClassName("d3-slider-handle")[0]*/
function responseHandler(res) {
  $.each(res.rows, function (i, row) {
    row.state = $.inArray(row.id, selections) !== -1
  })
  return res
}

// initTable()
function initTable() {
  $table.bootstrapTable('destroy').bootstrapTable({
    height: 600,
    locale: $('#locale').val(),
    columns: [
      [{
        field: 'state',
        checkbox: true,
        rowspan: 2,
        align: 'center',
        valign: 'middle'
      }, {
        title: 'Item Detail',
        colspan: 7,
        align: 'center'
      }],
      [{
        field: 'pathways',
        title: 'pathways',
        sortable: true,
        // footerFormatter: totalNameFormatter,
        align: 'center'
      },{
        field: 'p_val',
        title: 'p_val',
        sortable: true,
        // footerFormatter: totalNameFormatter,
        align: 'center'
      }, {
        field: 'avg_logFC',
        title: 'avg_logFC',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }, {
        field: 'pct.1',
        title: 'pct.1',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }, {
        field: 'pct.2',
        title: 'pct.2',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }, {
        field: 'p_val_adj',
        title: 'p_val_adj',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }, {
        field: 'cluster',
        title: 'cluster',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }]
    ]
  })
  $table.on('all.bs.table', function (e, name, args) {
    console.log(name, args)
  })
}

/*function initTableTSNE2D() {
  $table1.bootstrapTable('destroy').bootstrapTable({
    height: 600,
    locale: $('#locale1').val(),
    columns: [
      [{
        field: 'state',
        checkbox: true,
        rowspan: 2,
        align: 'center',
        valign: 'middle'
      }, {
        title: 'Item Detail',
        colspan: 4,
        align: 'center'
      }],
      [{
        field: 'cellName',
        title: 'Cell Name',
        sortable: true,
        // footerFormatter: totalNameFormatter,
        align: 'center'
      },{
        field: 'tSNE_1',
        title: 'tSNE_1',
        sortable: true,
        // footerFormatter: totalNameFormatter,
        align: 'center'
      }, {
        field: 'tSNE_2',
        title: 'tSNE_2',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }, {
        field: 'cell_type',
        title: 'Cell Type',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }]
    ]
  })
  $table1.on('all.bs.table', function (e, name, args) {
    console.log(name, args)
  })
}
function initTableTSNE3D() {
  $table1.bootstrapTable('destroy').bootstrapTable({
    height: 600,
    locale: $('#locale1').val(),
    columns: [
      [{
        field: 'state',
        checkbox: true,
        rowspan: 2,
        align: 'center',
        valign: 'middle'
      }, {
        title: 'Item Detail',
        colspan: 5,
        align: 'center'
      }],
      [{
        field: 'cellName',
        title: 'Cell Name',
        sortable: true,
        // footerFormatter: totalNameFormatter,
        align: 'center'
      },{
        field: 'tSNE_1',
        title: 'tSNE_1',
        sortable: true,
        // footerFormatter: totalNameFormatter,
        align: 'center'
      }, {
        field: 'tSNE_2',
        title: 'tSNE_2',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }, {
        field: 'tSNE_3',
        title: 'tSNE_3',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      },{
        field: 'cell_type',
        title: 'Cell Type',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }]
    ]
  })
  $table1.on('all.bs.table', function (e, name, args) {
    console.log(name, args)
  })
}
function initTableUMAP2D() {
  $table1.bootstrapTable('destroy').bootstrapTable({
    height: 600,
    locale: $('#locale1').val(),
    columns: [
      [{
        field: 'state',
        checkbox: true,
        rowspan: 2,
        align: 'center',
        valign: 'middle'
      }, {
        title: 'Item Detail',
        colspan: 4,
        align: 'center'
      }],
      [{
        field: 'cellName',
        title: 'Cell Name',
        sortable: true,
        // footerFormatter: totalNameFormatter,
        align: 'center'
      },{
        field: 'UMAP_1',
        title: 'UMAP_1',
        sortable: true,
        // footerFormatter: totalNameFormatter,
        align: 'center'
      }, {
        field: 'UMAP_2',
        title: 'UMAP_2',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }, {
        field: 'cell_type',
        title: 'Cell Type',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }]
    ]
  })
  $table1.on('all.bs.table', function (e, name, args) {
    console.log(name, args)
  })
}
function initTableUMAP3D() {
  $table1.bootstrapTable('destroy').bootstrapTable({
    height: 600,
    locale: $('#locale1').val(),
    columns: [
      [{
        field: 'state',
        checkbox: true,
        rowspan: 2,
        align: 'center',
        valign: 'middle'
      }, {
        title: 'Item Detail',
        colspan: 5,
        align: 'center'
      }],
      [{
        field: 'cellName',
        title: 'Cell Name',
        sortable: true,
        // footerFormatter: totalNameFormatter,
        align: 'center'
      },{
        field: 'UMAP_1',
        title: 'UMAP_1',
        sortable: true,
        // footerFormatter: totalNameFormatter,
        align: 'center'
      }, {
        field: 'UMAP_2',
        title: 'UMAP_2',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }, {
        field: 'UMAP_3',
        title: 'UMAP_3',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }, {
        field: 'cell_type',
        title: 'Cell Type',
        sortable: true,
        align: 'center',
        // footerFormatter: totalPriceFormatter
      }]
    ]
  })
  $table1.on('all.bs.table', function (e, name, args) {
    console.log(name, args)
  })
}*/


var buttons = $(".defBtn");
buttons.on("click",function(){
  buttons.css({"background-color":"#6C757D","color":"white"});
  $(this).css({"background-color":"#007BFF","color":"white"})
  console.log($(this).text());
  var T_SNE_Name = $(this).text()
  container.innerHTML = "";
  console.log("hahhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(T_SNE_Name);
  var url = "./"+T_SNE_Name+".json";
  console.log(url);
  $.ajax({
    url:url,
    type:'GET',
    datatype:"jsonp",
    success:function(data){

      if(T_SNE_Name==="T-SNE-2D"||T_SNE_Name==="UMAP-2D"){
        console.log("hahhahahhhah");
        console.log(data);
        container.innerHTML = "";
        $('#container').highcharts(data);
      }else{
        container.innerHTML = "";
        var chart = new Highcharts.Chart(data);
        // Add mouse and touch events for rotation
        (function (H) {
          function dragStart(eStart) {
            eStart = chart.pointer.normalize(eStart);

            var posX = eStart.chartX,
                posY = eStart.chartY,
                alpha = chart.options.chart.options3d.alpha,
                beta = chart.options.chart.options3d.beta,
                sensitivity = 5,  // lower is more sensitive
                handlers = [];

            function drag(e) {
              // Get e.chartX and e.chartY
              e = chart.pointer.normalize(e);

              chart.update({
                chart: {
                  options3d: {
                    alpha: alpha + (e.chartY - posY) / sensitivity,
                    beta: beta + (posX - e.chartX) / sensitivity
                  }
                }
              }, undefined, undefined, false);
            }

            function unbindAll() {
              handlers.forEach(function (unbind) {
                if (unbind) {
                  unbind();
                }
              });
              handlers.length = 0;
            }

            handlers.push(H.addEvent(document, 'mousemove', drag));
            handlers.push(H.addEvent(document, 'touchmove', drag));


            handlers.push(H.addEvent(document, 'mouseup', unbindAll));
            handlers.push(H.addEvent(document, 'touchend', unbindAll));
          }
          H.addEvent(chart.container, 'mousedown', dragStart);
          H.addEvent(chart.container, 'touchstart', dragStart);
        }(Highcharts));
      }


    }
  })
  tSne2dTable1.innerHTML = "<div class=\"select\" style=\"display: none\">\n" +
      "                                                    <select class=\"form-control\" id=\"locale1\">\n" +
      "                                                        <option value=\"af-ZA\">af-ZA</option>\n" +
      "\n" +
      "                                                    </select>\n" +
      "                                                </div>\n" +
      "                                                <table\n" +
      "                                                        id=\"table1\"\n" +
      "                                                        data-toolbar=\"#toolbar1\"\n" +
      "                                                        data-search=\"true\"\n" +
      "                                                        data-show-refresh=\"true\"\n" +
      "                                                        data-show-toggle=\"true\"\n" +
      "                                                        data-show-fullscreen=\"true\"\n" +
      "                                                        data-show-columns=\"true\"\n" +
      "                                                        data-show-columns-toggle-all=\"true\"\n" +
      "                                                        data-detail-view=\"true\"\n" +
      "                                                        data-show-export=\"true\"\n" +
      "                                                        data-click-to-select=\"true\"\n" +
      "                                                        data-detail-formatter=\"detailFormatter\"\n" +
      "                                                        data-minimum-count-columns=\"2\"\n" +
      "                                                        data-show-pagination-switch=\"true\"\n" +
      "                                                        data-pagination=\"true\"\n" +
      "                                                        data-id-field=\"id\"\n" +
      "                                                        data-page-list=\"[10, 25, 50, 100, all]\"\n" +
      "                                                        data-show-footer=\"true\"\n" +
      "                                                        data-side-pagination=\"client\"\n" +
      "                                                        data-url=\"T-SNE-2D_excel.json\"\n" +
      "                                                        data-response-handler=\"responseHandler\">\n" +
      "                                                </table>\n"
  console.log(T_SNE_Name);
  $table1 = $("#table1")
  selections = []
  /*$("#table1").attr("data-url","../../json/"+T_SNE_Name+"-excel.json")
  initTableUMAP2D()*/
  if(T_SNE_Name == "T-SNE-2D"){
    $("#table1").attr("data-url","./"+T_SNE_Name+"_excel.json")
    initTableTSNE2D()
  }else if(T_SNE_Name == "T-SNE-3D"){
    $("#table1").attr("data-url","./"+T_SNE_Name+"_excel.json")
    initTableTSNE3D()
  }else if(T_SNE_Name == "UMAP-2D"){
    console.log(1);
    $("#table1").attr("data-url","./"+T_SNE_Name+"_excel.json")
    initTableUMAP2D()
  }else{
    $("#table1").attr("data-url","./"+T_SNE_Name+"_excel.json")
    initTableUMAP3D()
  }

})

var markerBtns = $(".markerBtn")
markerBtns.on("click",function () {
  markerBtns.css({"background-color":"#6C757D","color":"white"});
  $(this).css({"background-color":"#007BFF","color":"white"})
  console.log($(this).text());
  var heatmapPic = $(this).text()
  $("#heatmap").attr("src", "./"+heatmapPic+".png")
  if(heatmapPic==="Bubble"){
    console.log("bubble");
    $("#heatmap").css("padding-top","60px")
    words.innerText = "The bubble plot of PAS profile of pathway signatures.";
    console.log(words.innerText);
  }else{
    $("#heatmap").css("padding-top","20px")
    words.innerText = "The heatmap of cell-type-specific activation pathways";
    console.log(words.innerText);
  }
})







var cellTypeSelect = document.getElementById("cellTypeSelect")
var pathwaySelect = document.getElementById("pathwaySelect")

var hzome = ini_hzome();
//改
// make_clust('container-id-2',"../../json/Asthma.json");

$.ajax({
  url:"./cellType_pathways.json",
  type:'get',
  datatype:"json",
  success:function(data){
    cellTypeSelect.innerHTML = '';
    pathwaySelect.innerHTML = '';
    var cellTypeArr = [];
    $.each(data,function (key,val,index) {
      // console.log(key);
      var cellTypeOption = document.createElement("option")
      cellTypeOption.innerText = key;
      cellTypeSelect.append(cellTypeOption)

      cellTypeArr.push(key)

      // console.log(val);
    })
    // console.log(cellTypeArr);
    var fixedOption = cellTypeArr[0]
    console.log(fixedOption);
    var fixedOptionVal = data[fixedOption]
    var def;
    for(var j = 0;j<fixedOptionVal.length;j++){
      def = fixedOptionVal[0]
      console.log(def);
      var fixedCellOption = document.createElement("option")
      fixedCellOption.innerText = fixedOptionVal[j];
      pathwaySelect.append(fixedCellOption)
    }
    $("#fet").attr("src", "./" + def+"/" + def + ".fet.png")
    $("#vil").attr("src", "./" + def +"/" +def + ".vil.png")
    // $("#het").attr("src", "../../scTPA - Job run_files/" + selectVal + ".het.png")
    // console.log(selectVal);
    var thermodynamicPic = document.getElementsByClassName("container-id-2")[0]
    thermodynamicPic.innerHTML = "";
    var thermodynamicWord = document.createElement("h1");
    thermodynamicWord.className = "wait_message";
    //thermodynamicWord.innerText = "Please wait ...";
    thermodynamicPic.append(thermodynamicWord)
    make_clust('container-id-2',"./"+def +"/"+ def +'.json');
    cellTypeArr = [];


    cellTypeSelect.addEventListener("change", function(){
      var selectCellTypeVal = event.target.value;
      pathwaySelect.innerHTML = '';
      var selectCellOptions = data[selectCellTypeVal];
      for(var i = 0;i<selectCellOptions.length;i++){
        var selectCellOption = document.createElement("option");
        selectCellOption.innerText = selectCellOptions[i];
        pathwaySelect.append(selectCellOption)
      }
      var selectCellOptions0 = selectCellOptions[0];
      console.log(selectCellOptions0);
      $("#fet").attr("src", "./" + selectCellOptions0 +"/"+ selectCellOptions0 + ".fet.png")
      $("#vil").attr("src", "./" + selectCellOptions0 +"/"+selectCellOptions0 + ".vil.png")
      var thermodynamicPic = document.getElementsByClassName("container-id-2")[0]
      thermodynamicPic.innerHTML = "";
      var thermodynamicWord = document.createElement("h1");
      //thermodynamicWord.className = "wait_message";
      //thermodynamicWord.innerText = "Please wait ...";
      thermodynamicPic.append(thermodynamicWord)
      make_clust('container-id-2',"./"+selectCellOptions0 +"/"+ selectCellOptions0 +'.json');
    })


  }
})

pathwaySelect.addEventListener("change", selectValue)

function selectValue() {
  var selectVal = event.target.value;
  $("#fet").attr("src", "./" + selectVal +"/"+ selectVal + ".fet.png")
  $("#vil").attr("src", "./" + selectVal +"/"+selectVal + ".vil.png")
  $(".clust_container").css("opacity","80%!important")
  $(".d3-slider-handle").css("left","80%!important")
  // $("#het").attr("src", "../../scTPA - Job run_files/" + selectVal + ".het.png")
  // console.log(selectVal);
  var thermodynamicPic = document.getElementsByClassName("container-id-2")[0]
  thermodynamicPic.innerHTML = "";
  var thermodynamicWord = document.createElement("h1");
  thermodynamicWord.className = "wait_message";
  thermodynamicWord.innerText = "Please wait ...";
  thermodynamicPic.append(thermodynamicWord)
  make_clust('container-id-2',"./"+selectVal +"/"+ selectVal +'.json');
}

var about_string = 'Zoom, scroll, and click buttons to interact with the clustergram. <a href="http://amp.pharm.mssm.edu/clustergrammer/help"> <i class="fa fa-question-circle" aria-hidden="true"></i> </a>';

function make_clust(rootName,inst_network){

    d3.json('./'+inst_network, function(network_data){

      // define arguments object
      var args = {
        root: '.'+rootName,
        'network_data': network_data,
        'about':about_string,
        'row_tip_callback':hzome.gene_info,
        'col_tip_callback':test_col_callback,
        'tile_tip_callback':test_tile_callback,
        'dendro_callback':dendro_callback,
        'matrix_update_callback':matrix_update_callback,
        'cat_update_callback': cat_update_callback,
         'sidebar_width':150,
         'ini_view':{'N_row_var':20},
         'ini_expand':true
      };

      resize_container(args,rootName);

      d3.select(window).on('resize',function(){
        resize_container(args,rootName);
        cgm.resize_viz();
      });

      cgm = Clustergrammer(args);

      check_setup_enrichr(cgm);

      d3.select(cgm.params.root + ' .wait_message').remove();

  });

}

function matrix_update_callback(){

  if (genes_were_found[this.root]){
    enr_obj[this.root].clear_enrichr_results(false);
  }
}

function cat_update_callback(){
  console.log('callback to run after cats are updated');
}

function test_tile_callback(tile_data){
  var row_name = tile_data.row_name;
  var col_name = tile_data.col_name;

}

function test_col_callback(col_data){
  var col_name = col_data.name;
}

function dendro_callback(inst_selection){

  var inst_rc;
  var inst_data = inst_selection.__data__;

  // toggle enrichr export section
  if (inst_data.inst_rc === 'row'){
    d3.select('.enrichr_export_section')
      .style('display', 'block');
  } else {
    d3.select('.enrichr_export_section')
      .style('display', 'none');
  }

}

function resize_container(args,rootName){
  var btnDiv = document.getElementsByClassName(rootName)[0]

  var screen_width = btnDiv.innerWidth;
  var screen_height = btnDiv.innerHeight - 60;

  d3.select(args.root)
    .style('width', screen_width+'px')
    .style('height', screen_height+'px');
}

import NutHead from '../../component/NutHead'
import NutFoot from '../../component/NutFoot'
import Script from 'next/script'
import NutNav from '../../component/NutNav'

export default function Diagram(){
    return (
<>
    <NutHead title={'我的图表-NutUml'} />
    <link href="//unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet" />
    <NutNav page="diagram" />

    <div id="app" class="container">
        <div class="panel panel-default">
            <div class="panel-heading">我的图表</div>
            <table class="table" id='tableId'>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">标题</th>
      <th scope="col">创建时间</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>0</td>
      <td>Loading</td>
      <td></td>
    </tr>
  </tbody>
</table>
        </div>
        
        <NutFoot />
    </div>
    <Script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></Script>
    <Script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js" onLoad={()=>{
        function rest_table_data() {
            var table = $("#tableId");
            //删除原有表格数据
            table.find("tr").each(function(i){
                if(i != 0){
                    //表头不删
                    this.remove();
                }
            });
         
            $.ajax({
                url: "/api/nutuml/list",
                headers: {
                    token: window.localStorage.getItem('token')
                }
              }).done(function( data ) {
                var arr = data.data;
                if(arr){
                    for (var i = 0; i < arr.length; i++) {
                        //数据行
                        var line = arr[i];
                        var tr = $("<tr>", {
                            height: "36"
                        });
                        //数据列
                        td(i,tr);
                        var title = '<a href="' + 'detail?ts=' + line.ts + '">' + line.title + "</a>";
                        td(title,tr);
                        td(line.ts,tr);
                        tr.appendTo(table);
                    }
                }
            });
        }
        function td(val,tr){
            var col = $("<td>" + val + "</td>");
            col.appendTo(tr);
        }
        rest_table_data();
    }}></Script>

</>)
}

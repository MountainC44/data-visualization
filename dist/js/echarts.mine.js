$(function(){var e={data:{bottomLinks:[{source:"回液泵",target:"test1"},{source:"供液泵",target:"test1"},{source:"入气风机",target:"test1"},{source:"补光灯2",target:"test1"},{source:"补光灯1",target:"test1"}],node:[{id:"cb21c80e-9467-42fc-ae15-49a6f1772884",level:0,name:"叶菜工厂",type:"factory"},{id:"7bdcae08-7071-4d84-b999-fc782b5d7baa",level:0,name:"果菜工厂",type:"factory"},{id:"69a8fb68-ec63-49bd-a674-bbd59cf201b1",level:1,name:"回液泵",type:"exeunit"},{id:"6819904e-5a92-4dd9-93f6-1e359ea85334",level:1,name:"供液泵",type:"exeunit"},{id:"4acdb79d-fa4e-43df-8e7e-43e13efb217f",level:1,name:"入气风机",type:"exeunit"},{id:"5e9f8f5c-30c2-4953-8169-dd62ee0de446",level:1,name:"补光灯2",type:"exeunit"},{id:"4547916d-9702-48eb-94fd-8f699b0befdb",level:1,name:"补光灯1",type:"exeunit"},{id:"e6793610-73eb-41bb-8998-fea4dc526e55",level:2,name:"test1",type:"com"},{id:"946f8fd9-627a-4694-9350-9f2378ec3ce6",level:2,name:"test1",type:"com"}],topLinks:[{source:"回液泵",target:"叶菜工厂"},{source:"供液泵",target:"叶菜工厂"},{source:"入气风机",target:"叶菜工厂"},{source:"补光灯2",target:"叶菜工厂"},{source:"补光灯1",target:"叶菜工厂"}]},error_code:0},t=(e.data.node,e.data.topLinks,e.data.bottomLinks,[{name:"节点1",x:300,y:300},{name:"节点2",x:800,y:300},{name:"节点3",x:550,y:100},{name:"节点4",x:550,y:500}]),a=[{source:"节点2",target:"节点1"},{source:"节点1",target:"节点3"},{source:"节点2",target:"节点3"},{source:"节点2",target:"节点4"},{source:"节点1",target:"节点4"}],o=echarts.init(document.getElementById("main")),n={title:{text:""},tooltip:{},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"none",symbolSize:80,roam:!0,label:{normal:{show:!0}},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,10],edgeLabel:{normal:{textStyle:{fontSize:20}}},data:t,links:a,lineStyle:{normal:{opacity:.9,width:2,curveness:0}}}]};o.setOption(n),o.on("click",function(e){if("markPoint"===e.componentType)5===e.seriesIndex;else if("series"===e.componentType&&"graph"===e.seriesType)if("edge"===e.dataType);else{console.log(e.name);for(var t="",a=0,o=arr_level_1.length;a<o;a++)if(e.name==arr_level_1[a].name){t=arr_level_1[a].id;break}console.log(t)}})});
//# sourceMappingURL=echarts.mine.js.map

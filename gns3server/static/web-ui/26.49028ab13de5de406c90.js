"use strict";(self.webpackChunkgns3_web_ui=self.webpackChunkgns3_web_ui||[]).push([[26],{91026:function(W,g,a){a.r(g),a.d(g,{TopologySummaryComponent:function(){return U}});var t=a(38999),_=a(96852),h=a(14200),f=a(36889),v=a(3941),y=a(15132),p=a(40098),x=a(39095),c=a(88802),S=a(73044),d=a(59412),T=a(93386);function C(i,e){if(1&i){var o=t.EpF();t.TgZ(0,"div",2),t.NdJ("mousemove",function(r){return t.CHM(o),t.oxw().dragWidget(r)},!1,t.evT)("mouseup",function(){return t.CHM(o),t.oxw().toggleDragging(!1)},!1,t.evT),t.qZA()}}function b(i,e){1&i&&(t.O4$(),t.TgZ(0,"svg",28),t._UZ(1,"rect",29),t.qZA())}function E(i,e){1&i&&(t.O4$(),t.TgZ(0,"svg",28),t._UZ(1,"rect",30),t.qZA())}function Z(i,e){1&i&&(t.O4$(),t.TgZ(0,"svg",28),t._UZ(1,"rect",31),t.qZA())}function O(i,e){if(1&i&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&i){var o=t.oxw().$implicit;t.xp6(1),t.lnq(" ",o.console_type,"://",o.console_host,":",o.console," ")}}function P(i,e){1&i&&(t.TgZ(0,"div"),t._uU(1," none "),t.qZA())}function M(i,e){if(1&i&&(t.TgZ(0,"div",25),t.TgZ(1,"div"),t.YNc(2,b,2,0,"svg",26),t.YNc(3,E,2,0,"svg",26),t.YNc(4,Z,2,0,"svg",26),t._uU(5),t.qZA(),t.YNc(6,O,2,3,"div",27),t.YNc(7,P,2,0,"div",27),t.qZA()),2&i){var o=e.$implicit;t.xp6(2),t.Q6J("ngIf","started"===o.status),t.xp6(1),t.Q6J("ngIf","suspended"===o.status),t.xp6(1),t.Q6J("ngIf","stopped"===o.status),t.xp6(1),t.hij(" ",o.name," "),t.xp6(1),t.Q6J("ngIf",null!=o.console&&null!=o.console&&"none"!=o.console_type),t.xp6(1),t.Q6J("ngIf",null==o.console||"none"===o.console_type)}}function w(i,e){1&i&&(t.O4$(),t.TgZ(0,"svg",28),t._UZ(1,"rect",29),t.qZA())}function A(i,e){1&i&&(t.O4$(),t.TgZ(0,"svg",28),t._UZ(1,"rect",31),t.qZA())}function F(i,e){if(1&i&&(t.TgZ(0,"div",25),t.TgZ(1,"div"),t.YNc(2,w,2,0,"svg",26),t.YNc(3,A,2,0,"svg",26),t._uU(4),t.qZA(),t.TgZ(5,"div"),t._uU(6),t.qZA(),t.TgZ(7,"div"),t._uU(8),t.qZA(),t.qZA()),2&i){var o=e.$implicit,s=t.oxw(2);t.xp6(2),t.Q6J("ngIf",o.connected),t.xp6(1),t.Q6J("ngIf",!o.connected),t.xp6(1),t.hij(" ",o.name," "),t.xp6(2),t.hij(" ",o.host," "),t.xp6(2),t.hij(" ",s.server.location," ")}}var I=function(i){return{lightTheme:i}},D=function(){return{right:!0,left:!0,bottom:!0,top:!0}};function N(i,e){if(1&i){var o=t.EpF();t.TgZ(0,"div",3),t.NdJ("mousedown",function(){return t.CHM(o),t.oxw().toggleDragging(!0)})("resizeStart",function(){return t.CHM(o),t.oxw().toggleDragging(!1)})("resizeEnd",function(n){return t.CHM(o),t.oxw().onResizeEnd(n)}),t.TgZ(1,"div",4),t.TgZ(2,"mat-tab-group"),t.TgZ(3,"mat-tab",5),t.NdJ("click",function(){return t.CHM(o),t.oxw().toggleTopologyVisibility(!0)}),t.TgZ(4,"div",6),t.TgZ(5,"div",7),t.TgZ(6,"mat-select",8),t.TgZ(7,"mat-optgroup",9),t.TgZ(8,"mat-option",10),t.NdJ("onSelectionChange",function(){return t.CHM(o),t.oxw().applyStatusFilter("started")}),t._uU(9,"started"),t.qZA(),t.TgZ(10,"mat-option",11),t.NdJ("onSelectionChange",function(){return t.CHM(o),t.oxw().applyStatusFilter("suspended")}),t._uU(11,"suspended"),t.qZA(),t.TgZ(12,"mat-option",12),t.NdJ("onSelectionChange",function(){return t.CHM(o),t.oxw().applyStatusFilter("stopped")}),t._uU(13,"stopped"),t.qZA(),t.qZA(),t.TgZ(14,"mat-optgroup",13),t.TgZ(15,"mat-option",14),t.NdJ("onSelectionChange",function(){return t.CHM(o),t.oxw().applyCaptureFilter("capture")}),t._uU(16,"active capture(s)"),t.qZA(),t.TgZ(17,"mat-option",15),t.NdJ("onSelectionChange",function(){return t.CHM(o),t.oxw().applyCaptureFilter("packet")}),t._uU(18,"active packet captures"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",16),t.TgZ(20,"mat-select",17),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().setSortingOrder()})("valueChange",function(n){return t.CHM(o),t.oxw().sortingOrder=n}),t.TgZ(21,"mat-option",18),t._uU(22,"sort by name ascending"),t.qZA(),t.TgZ(23,"mat-option",19),t._uU(24,"sort by name descending"),t.qZA(),t.qZA(),t.qZA(),t._UZ(25,"mat-divider",20),t.TgZ(26,"div",21),t.YNc(27,M,8,6,"div",22),t.qZA(),t.qZA(),t.qZA(),t.TgZ(28,"mat-tab",23),t.NdJ("click",function(){return t.CHM(o),t.oxw().toggleTopologyVisibility(!1)}),t.TgZ(29,"div",6),t.TgZ(30,"div",24),t.YNc(31,F,9,5,"div",22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){var s=t.oxw();t.Q6J("ngStyle",s.style)("ngClass",t.VKq(9,I,s.isLightThemeEnabled))("validateResize",s.validate)("resizeEdges",t.DdM(11,D))("enableGhostResize",!0),t.xp6(20),t.Q6J("value",s.sortingOrder),t.xp6(6),t.Q6J("ngStyle",s.styleInside),t.xp6(1),t.Q6J("ngForOf",s.filteredNodes),t.xp6(4),t.Q6J("ngForOf",s.computes)}}var U=function(){function i(e,o,s,r,n){this.nodesDataSource=e,this.projectService=o,this.computeService=s,this.linksDataSource=r,this.themeService=n,this.closeTopologySummary=new t.vpe,this.style={},this.styleInside={height:"280px"},this.subscriptions=[],this.nodes=[],this.filteredNodes=[],this.sortingOrder="asc",this.startedStatusFilterEnabled=!1,this.suspendedStatusFilterEnabled=!1,this.stoppedStatusFilterEnabled=!1,this.captureFilterEnabled=!1,this.packetFilterEnabled=!1,this.computes=[],this.isTopologyVisible=!0,this.isDraggingEnabled=!1,this.isLightThemeEnabled=!1}return i.prototype.ngOnInit=function(){var e=this;this.isLightThemeEnabled="light"===this.themeService.getActualTheme(),this.subscriptions.push(this.nodesDataSource.changes.subscribe(function(o){e.nodes=o,e.nodes.forEach(function(s){("0.0.0.0"===s.console_host||"0:0:0:0:0:0:0:0"===s.console_host||"::"===s.console_host)&&(s.console_host=e.server.host)}),e.filteredNodes=o.sort("asc"===e.sortingOrder?e.compareAsc:e.compareDesc)})),this.projectService.getStatistics(this.server,this.project.project_id).subscribe(function(o){e.projectsStatistics=o}),this.computeService.getComputes(this.server).subscribe(function(o){e.computes=o}),this.revertPosition()},i.prototype.revertPosition=function(){var e=localStorage.getItem("leftPosition"),o=localStorage.getItem("rightPosition"),s=localStorage.getItem("topPosition"),r=localStorage.getItem("widthOfWidget"),n=localStorage.getItem("heightOfWidget");this.style=s?{position:"fixed",left:+e+"px",right:+o+"px",top:+s+"px",width:+r+"px",height:+n+"px"}:{top:"60px",right:"0px",width:"320px",height:"400px"}},i.prototype.toggleDragging=function(e){this.isDraggingEnabled=e},i.prototype.dragWidget=function(e){var o=Number(e.movementX),s=Number(e.movementY),r=Number(this.style.width.split("px")[0]),n=Number(this.style.height.split("px")[0]),l=Number(this.style.top.split("px")[0])+s;if(this.style.left){var u=Number(this.style.left.split("px")[0])+o;this.style={position:"fixed",left:u+"px",top:l+"px",width:r+"px",height:n+"px"},localStorage.setItem("leftPosition",u.toString()),localStorage.setItem("topPosition",l.toString()),localStorage.setItem("widthOfWidget",r.toString()),localStorage.setItem("heightOfWidget",n.toString())}else{var m=Number(this.style.right.split("px")[0])-o;this.style={position:"fixed",right:m+"px",top:l+"px",width:r+"px",height:n+"px"},localStorage.setItem("rightPosition",m.toString()),localStorage.setItem("topPosition",l.toString()),localStorage.setItem("widthOfWidget",r.toString()),localStorage.setItem("heightOfWidget",n.toString())}},i.prototype.validate=function(e){return!(e.rectangle.width&&e.rectangle.height&&(e.rectangle.width<290||e.rectangle.height<260))},i.prototype.onResizeEnd=function(e){this.style={position:"fixed",left:e.rectangle.left+"px",top:e.rectangle.top+"px",width:e.rectangle.width+"px",height:e.rectangle.height+"px"},this.styleInside={height:e.rectangle.height-120+"px"}},i.prototype.toggleTopologyVisibility=function(e){this.isTopologyVisible=e,this.revertPosition()},i.prototype.compareAsc=function(e,o){return e.name<o.name?-1:1},i.prototype.compareDesc=function(e,o){return e.name<o.name?1:-1},i.prototype.ngOnDestroy=function(){this.subscriptions.forEach(function(e){return e.unsubscribe()})},i.prototype.setSortingOrder=function(){this.filteredNodes=this.filteredNodes.sort("asc"===this.sortingOrder?this.compareAsc:this.compareDesc)},i.prototype.applyStatusFilter=function(e){"started"===e?this.startedStatusFilterEnabled=!this.startedStatusFilterEnabled:"stopped"===e?this.stoppedStatusFilterEnabled=!this.stoppedStatusFilterEnabled:"suspended"===e&&(this.suspendedStatusFilterEnabled=!this.suspendedStatusFilterEnabled),this.applyFilters()},i.prototype.applyCaptureFilter=function(e){"capture"===e?this.captureFilterEnabled=!this.captureFilterEnabled:"packet"===e&&(this.packetFilterEnabled=!this.packetFilterEnabled),this.applyFilters()},i.prototype.applyFilters=function(){var e=[];this.startedStatusFilterEnabled&&(e=e.concat(this.nodes.filter(function(o){return"started"===o.status}))),this.stoppedStatusFilterEnabled&&(e=e.concat(this.nodes.filter(function(o){return"stopped"===o.status}))),this.suspendedStatusFilterEnabled&&(e=e.concat(this.nodes.filter(function(o){return"suspended"===o.status}))),!this.startedStatusFilterEnabled&&!this.stoppedStatusFilterEnabled&&!this.suspendedStatusFilterEnabled&&(e=e.concat(this.nodes)),this.captureFilterEnabled&&(e=this.checkCapturing(e)),this.packetFilterEnabled&&(e=this.checkPacketFilters(e)),this.filteredNodes=e.sort("asc"===this.sortingOrder?this.compareAsc:this.compareDesc)},i.prototype.checkCapturing=function(e){var o=this.linksDataSource.getItems(),s=[];o.forEach(function(n){n.capturing&&n.nodes.forEach(function(l){s.push(l.node_id)})});var r=[];return e.forEach(function(n){s.includes(n.node_id)&&r.push(n)}),r},i.prototype.checkPacketFilters=function(e){var o=this.linksDataSource.getItems(),s=[];o.forEach(function(n){(n.filters.bpf||n.filters.corrupt||n.filters.corrupt||n.filters.packet_loss||n.filters.frequency_drop)&&n.nodes.forEach(function(l){s.push(l.node_id)})});var r=[];return e.forEach(function(n){s.includes(n.node_id)&&r.push(n)}),r},i.prototype.close=function(){this.closeTopologySummary.emit(!1)},i.\u0275fac=function(o){return new(o||i)(t.Y36(_.G),t.Y36(h.Y),t.Y36(f.X),t.Y36(v.F),t.Y36(y.f))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-topology-summary"]],inputs:{server:"server",project:"project"},outputs:{closeTopologySummary:"closeTopologySummary"},decls:2,vars:2,consts:[[3,"mousemove","mouseup",4,"ngIf"],["class","summaryWrapper","mwlResizable","",3,"ngStyle","ngClass","validateResize","resizeEdges","enableGhostResize","mousedown","resizeStart","resizeEnd",4,"ngIf"],[3,"mousemove","mouseup"],["mwlResizable","",1,"summaryWrapper",3,"ngStyle","ngClass","validateResize","resizeEdges","enableGhostResize","mousedown","resizeStart","resizeEnd"],[1,"summaryHeader"],["label","Map topology",3,"click"],[1,"tabContent"],[1,"summaryFilters"],["placeholder","Filter nodes","multiple",""],["label","Status filter"],["value","started",3,"onSelectionChange"],["value","suspended",3,"onSelectionChange"],["value","stopped",3,"onSelectionChange"],["label","Capture filter"],["value","capture",3,"onSelectionChange"],["value","packet",3,"onSelectionChange"],[1,"summarySorting"],["placeholder","Sorting",3,"value","selectionChange","valueChange"],["value","asc"],["value","desc"],[1,"divider"],[1,"summaryContent",3,"ngStyle"],["class","nodeRow",4,"ngFor","ngForOf"],["label","Servers",3,"click"],[1,"summaryContentServers"],[1,"nodeRow"],["width","10","height","10",4,"ngIf"],[4,"ngIf"],["width","10","height","10"],["x","0","y","0","width","10","height","10","fill","green",1,"status_started"],["x","0","y","0","width","10","height","10","fill","yellow",1,"status_suspended"],["x","0","y","0","width","10","height","10","fill","red",1,"status_stopped"]],template:function(o,s){1&o&&(t.YNc(0,C,1,0,"div",0),t.YNc(1,N,32,12,"div",1)),2&o&&(t.Q6J("ngIf",s.isDraggingEnabled),t.xp6(1),t.Q6J("ngIf",s.projectsStatistics))},directives:[p.O5,x.E$,p.PC,p.mk,c.SP,c.uX,S.gD,d.Nv,d.ey,T.d,p.sg],styles:["@media screen and (max-width: 600px){.summaryWrapper[_ngcontent-%COMP%]{visibility:hidden}}mat-tab-group[_ngcontent-%COMP%]{width:100%}.summaryWrapper[_ngcontent-%COMP%]{box-shadow:0 4px 8px rgba(0,0,0,.2),0 6px 20px rgba(0,0,0,.19);position:fixed;top:60px;right:0px;height:400px;width:320px;background:#263238;color:#fff;overflow:hidden;font-size:12px;margin:20px;border-radius:8px}.lightTheme[_ngcontent-%COMP%]{background-color:rgba(244,248,252,.95);color:#000;margin:20px;border-radius:8px}.summaryHeaderMenu[_ngcontent-%COMP%]{height:24px}.summaryHeader[_ngcontent-%COMP%]{width:100%;display:flex}.summaryFilters[_ngcontent-%COMP%]{height:25px;margin-left:5px;margin-right:5px}.summarySorting[_ngcontent-%COMP%]{height:25px;margin-left:5px;margin-right:5px}.tabContent[_ngcontent-%COMP%]{padding:10px}.summaryContent[_ngcontent-%COMP%]{overflow:auto;scrollbar-color:darkgrey #263238;scrollbar-width:thin}.summaryContentServers[_ngcontent-%COMP%]{max-height:350px;overflow:auto;scrollbar-color:darkgrey #263238;scrollbar-width:thin}.titleButton[_ngcontent-%COMP%]{margin-left:5px;margin-top:4px;outline:none;border-radius:0}.marked[_ngcontent-%COMP%]{color:#0097a7;border-bottom:2px solid #0097a7}.divider[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px;width:100%;height:2px}.nodeRow[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;padding-right:5px}[_ngcontent-%COMP%]::-webkit-scrollbar{width:.5em}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:1px solid #263238}.radio-group-wrapper[_ngcontent-%COMP%]{margin-top:5px}.radio-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.closeButton[_ngcontent-%COMP%]{cursor:pointer;font-size:24px;margin-top:8px;margin-right:5px}.filterBox[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.notvisible[_ngcontent-%COMP%]{display:none}"]}),i}()}}]);
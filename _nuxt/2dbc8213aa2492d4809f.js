(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{172:function(e,t,n){var content=n(246);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("ac8eb4f8",content,!0,{sourceMap:!1})},173:function(e,t,n){var content=n(248);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("ede1bc2a",content,!0,{sourceMap:!1})},239:function(e,t){},240:function(e,t){},241:function(e,t){},242:function(e,t){},243:function(e,t){},244:function(e,t){},245:function(e,t,n){"use strict";var r=n(172);n.n(r).a},246:function(e,t,n){(e.exports=n(36)(!1)).push([e.i,'.snakeai-wrapper[data-v-2a4b4f0a]{width:100%;padding:0;margin:5% auto;text-align:center;display:inline-flex}.snakeai-wrapper .snakeai[data-v-2a4b4f0a]{width:45%;position:relative;top:0;left:0}.snakeai-wrapper .description[data-v-2a4b4f0a]{width:45%;display:block;margin:0 0 0 10%;position:relative}.snakeai-wrapper .description h1[data-v-2a4b4f0a]{text-align:center}.snakeai .square[data-v-2a4b4f0a]:before{content:"";display:block;padding-top:100%}.snakeai .square[data-v-2a4b4f0a]{margin:0;padding:0;background-color:grey}.snakeai .food[data-v-2a4b4f0a]{background-color:#00f}.snakeai .snake-head[data-v-2a4b4f0a]{background-color:red}.snakeai .snake[data-v-2a4b4f0a]{background-color:green}@media (max-width:1300px){.snakeai-wrapper[data-v-2a4b4f0a]{width:100%;padding:0;margin-top:5%;display:block}.snakeai-wrapper .snakeai[data-v-2a4b4f0a]{width:500px;margin:auto}.snakeai-wrapper .description[data-v-2a4b4f0a]{width:600px;margin:auto}}@media (max-width:600px){.snakeai-wrapper .snakeai[data-v-2a4b4f0a]{width:90%;max-width:500px;min-width:250px;margin:auto}.snakeai-wrapper .description[data-v-2a4b4f0a]{width:90%;margin:auto}}',""])},247:function(e,t,n){"use strict";var r=n(173);n.n(r).a},248:function(e,t,n){(e.exports=n(36)(!1)).push([e.i,".snakeai-page-wrapper[data-v-6365a635]{width:100%;max-width:1200px;display:block;margin:auto}",""])},253:function(e,t,n){"use strict";n.r(t);n(54);var r,o,c,h=n(7),d=(n(176),n(252)),f={name:"snakeai",props:["gridSizeX","gridSizeY"],data:function(){var e=this,t=this.resetSnake(),n=this.spawnFood();return this.spawnFood(),{snake:t,food:n,grid:Array(this.$props.gridSizeX).fill(0).map(function(){return Array(e.$props.gridSizeY)})}},mounted:(c=Object(h.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(window.location.protocol,"//").concat(window.location.host,"/snakeai_brain/model.json"),console.log("Fetching model.json from ".concat(t)),e.next=4,d.a(t);case 4:this.model=e.sent,this.playInterval=setInterval(Object(h.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.tick();case 2:case"end":return e.stop()}},e,this)})).bind(this),150);case 6:case"end":return e.stop()}},e,this)})),function(){return c.apply(this,arguments)}),methods:{renderGrid:function(e){var t=this;return this.grid=Array(this.$props.gridSizeX).fill().map(function(){return Array(t.$props.gridSizeY).fill(0)}),this.grid[this.snake.x][this.snake.y]=1,this.snake.pieces.forEach(function(e,n){0!==n&&(t.grid[e[0]][e[1]]=2)}),this.grid[this.food.x][this.food.y]=3,this.grid},getLastPiecePosition:function(){return 0!==this.snake.pieces.length?this.snake.pieces[this.snake.pieces.length-1]:[this.snake.x,this.snake.y]},tick:(o=Object(h.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.snake.lastPieceLastPosition=this.getLastPiecePosition(),e.next=3,this.play();case 3:t=e.sent,this.snakeTick(t),this.snakeHasTouchedFood()&&(this.snakeGrow(),this.food=this.spawnFood()),(this.snakeOutOfBound()||this.snakeTouchedItself())&&this.reset(),this.renderGrid();case 8:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)}),snakeTouchedItself:function(){for(var i=1;i<this.snake.pieces.length;i++)if(this.snake.x===this.snake.pieces[i][0]&&this.snake.y===this.snake.pieces[i][1])return!0;return!1},snakeOutOfBound:function(){return this.snake.x>=this.$props.gridSizeX||this.snake.y>=this.$props.gridSizeY||this.snake.x<0||this.snake.y<0},snakeHasTouchedFood:function(){return this.snake.x===this.food.x&&this.snake.y===this.food.y},snakeGrow:function(){this.snake.pieces.push(this.snake.lastPieceLastPosition)},resetSnake:function(){var e=Math.floor(Math.random()*this.$props.gridSizeX)%this.$props.gridSizeX,t=Math.floor(Math.random()*this.$props.gridSizeY)%this.$props.gridSizeY;return{x:e,y:t,pieces:[[e,t]],direction:0}},reset:function(){this.snake=this.resetSnake(),this.food=this.spawnFood()},spawnFood:function(){for(;;){for(var e=Math.floor(Math.random()*this.$props.gridSizeX)%this.$props.gridSizeX,t=Math.floor(Math.random()*this.$props.gridSizeY)%this.$props.gridSizeY,n=!1,r=this.snake?this.snake.pieces:[],i=0;i<r.length;i++)if(e===r[i][0]&&t===r[i][1]){n=!0;break}if(!n)return{x:e,y:t}}},snakeTick:function(e){switch(this.snake.direction-e!=-2&&this.snake.direction-e!=2&&(this.snake.direction=e),this.snake.direction){case 0:this.snake.y-=1;break;case 1:this.snake.x+=1;break;case 2:this.snake.y+=1;break;case 3:this.snake.x-=1}for(var i=this.snake.pieces.length-1;i>=1;i--)this.snake.pieces[i]=this.snake.pieces[i-1];this.snake.pieces[0]=[this.snake.x,this.snake.y]},getTensor:function(){var e=this,t=Array(3).fill().map(function(){return Array(e.$props.gridSizeX).fill().map(function(){return Array(e.$props.gridSizeY).fill(0)})});return t[0][this.snake.x][this.snake.y]=1,this.snake.pieces.forEach(function(e,n){0!==n&&(t[1][e[0]][e[1]]=1)}),t[2][this.food.x][this.food.y]=1,t},play:(r=Object(h.a)(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.b([this.getTensor()]),e.next=3,this.model.predict(t).array();case 3:return n=e.sent,e.abrupt("return",this.argMax(n[0]));case 5:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)}),argMax:function(e){return e.map(function(e,i){return[e,i]}).reduce(function(e,a){return a[0]>e[0]?a:e})[1]}}},k=(n(245),n(12)),l={name:"snakeai-page",components:{snakeai:Object(k.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"snakeai-wrapper"},[n("table",{staticClass:"snakeai"},e._l(e.grid,function(t,r){return n("tr",{key:r,staticClass:"row"},e._l(t,function(e,t){return n("td",{key:t,staticClass:"square",class:{"snake-head":1==e,snake:2==e,food:3==e}})}),0)}),0),e._v(" "),e._m(0)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"description"},[t("h1",[this._v("SnakeAI")]),this._v(" "),t("span",[this._v("A live version with a pre-trained neural network! If you want to now more about it, you can check the training code at")]),this._v(" "),t("a",{attrs:{target:"_blank",href:"https://github.com/DanielSanRocha/SnakeAI"}},[this._v("https://github.com/DanielSanRocha/SnakeAI.")])])}],!1,null,"2a4b4f0a",null).exports}},w=(n(247),Object(k.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"snakeai-page-wrapper"},[t("snakeai",{attrs:{gridSizeX:6,gridSizeY:6}})],1)},[],!1,null,"6365a635",null));t.default=w.exports}}]);
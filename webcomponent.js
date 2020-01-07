(function()  {
let tmpl = document.createElement('template');
tmpl.innerHTML = `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.6.0/echarts-en.common.js"></script>
	<div id="main" style="width:600px; height:400px;"></div>
`;
import 'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.6.0/echarts-en.common.js';
class Gauge extends HTMLElement {

	constructor() {
		super();
		
		//var echarts = require('echarts');
		this._shadowRoot = this.attachShadow({mode: 'open'});
		this._shadowRoot.appendChild(tmpl.content.cloneNode(true));

		loadScript

		var dataResultSet = null;
		var min = null; 		
		var max = null; 		
		var minNum = null; 		
		var maxNum = null; 
		var precision = null; 	
		var splitnumber = null;
		var color1 = null; 	
		var color2 = null; 	
		var color3 = null; 	
		var value1 = null; 	
		var value2 = null; 	
		var value3 = null; 	
		var thick = null; 		
		var tickValue = null; 		
		var valuedesc = null; 	
		var reload = false;
		var myChart = null;
		var that = this;
		var tickValueNum = null;
		var startAngle = null;
		var endAngle = null;
		var sign = null;
		var tickValueFontSize = null;
		var tickValueFontFamily = null;
		var splitLineVisible = null;
		var splitLineColor = null;
		var splitLineWidth = null;
		var pointerLength = null;
		var pointerWidth = null;
		var pointerColor = null;
		var tooltipVisible = null;
		var colorNum = null;
		var colorArray = [];
		this._props = {};

		function init(){
		
			// if (this._alive){
			// 	return;
			// } else {
				
				myChart = echarts.init( _shadowRoot.querySelector('#main'));//document.getElementById(this.$().attr('id'))); 
				this._alive = true;
			//}
		}
		
		init();

// 		this.afterUpdate = function() {
// 			if (tickValue){
// 				if (reload){
// 					return;
// 				} else {
// 					if (tickValue=== Object)
// 					tickValueNum = tickValue.data[0];
// 					else 
// 					tickValueNum = tickValue;
// 					minNum = min;
// 					maxNum = max;
// 				/*	for(i=colorNum;i<=colornum;i++)
// 					{
// 					var a ="["+color+i+","+value+i+"]";
// 					colorArray.push(a);
// 					}
// 				*/
// 					this.insertData();
// 					reload = true;
// 				}
// 			}
				
// 		};
		
// 		this.insertData = function() {
			
// 			var option = {
// 					tooltip : {
// 						  show : tooltipVisible,
// 						/*formatter:"{a} <br/> {c}"*/
// 						formatter:"{b} <br/>"+'{c}'+sign
// 					},
// 					toolbox: {
// 						show : false,
// 						feature : {
// 							mark : {show: true},
// 							restore : {show: true},
// 							saveAsImage : {show: true}
// 						}
// 					},
// 					series : [
// 						{
// 							name: valuedesc,
// 							type:'gauge',
// 							center : ['50%', '50%'],
// 							radius : [0, '75%'],
// 							startAngle: startAngle,
// 							endAngle : endAngle,
// 							min: minNum,
// 							max: maxNum,
// 							precision: precision,
// 							splitNumber: splitNumber,
// 							axisLine: {
// 								show: true,
// 								lineStyle: {
// 										//	color: [[value1, color1],[value2, color2],[1, color3]], 
// 								color: colorArray,
// 									width: thick
// 								}
// 							},
// 							axisTick: {
// 								show: true,
// 								splitNumber: 5,
// 								length :10,
// 								lineStyle: {
// 									color: '#eee',
// 									width: 1,
// 									type: 'solid'
// 								}
// 							},
// 							splitLine: {
// 								show: splitLineVisible,
// 								length :30,
// 								lineStyle: {
// 									color: splitLineColor,
// 									width: splitLineWidth,
// 									type: 'solid'
// 								}
// 							},
// 						/*	axisLabel: {
// 								show: true,
// 								formatter: function(v){
// 									switch (v+''){
// 									case '10': return '弱';
// 									case '30': return '低';
// 									case '60': return '中';
// 									case '90': return '高';
// 									}
// 								},
// 								textStyle: {
// 									 color: 'red'
// 								}
// 							},*/
// 							pointer : {
// 								length : pointerLength,
// 								width : pointerWidth,
// 								color : pointerColor
// 							},
// 							title : {
// 								show : true,
// 								offsetCenter: ['-65%', '-50%'],
// 								textStyle: {
// 									color: '#333',
// 									fontSize : 40
// 								}
// 							},
// 							detail : {
// 								show : true,
// 								backgroundColor: 'rgba(0,0,0,0)',
// 								borderWidth: 0,
// 								borderColor: '#ccc',
// 								width: 100,
// 								height: 40,
// 								//offsetCenter: ['-60%', '-30%'],
// 								formatter:'{value}'+sign,
// 								textStyle: {
// 									color: '#000',
// 									fontSize : tickValueFontSize,
// 									fontFamily: tickValueFontFamily
// 								}
// 							},
// 	//						detail : {formatter:'{value}%'},
// 							data:[{value: tickValueNum, name: valueDesc}]
// 						}
// 					]
// 				};
			
// 			myChart.setOption(option, true);
// 		};
		
// 		this.Min = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return min;
// 			} else {
// 				Reload = false;
// 				min = value;
// 				return this;
// 			};
// 		};
		
// 		this.Max = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return max;
// 			} else {
// 				Reload = false;
// 				max = value;
// 				return this;
// 			};
// 		};
		
// 		this.Precision = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return precision;
// 			} else {
// 				Reload = false;
// 				precision = value;
// 				return this;
// 			};
// 		};
		
// 		this.SplitNumber = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return splitNumber;
// 			} else {
// 				Reload = false;
// 				splitNumber = value;
// 				return this;
// 			};
// 		};
		
// 		this.Color1 = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return color1;
// 			} else {
// 				Reload = false;
// 				color1 = value;
// 				return this;
// 			};
// 		};
		
// 		this.Color2 = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return color2;
// 			} else {
// 				Reload = false;
// 				color2 = value;
// 				return this;
// 			};
// 		};
		
// 		this.Color3 = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return color3;
// 			} else {
// 				Reload = false;
// 				color3 = value;
// 				return this;
// 			};
// 		};
		
// 		this.Value1 = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return value1;
// 			} else {
// 				Reload = false;
// 				value1 = value;
// 				return this;
// 			};
// 		};
		
// 		this.Value2 = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return value2;
// 			} else {
// 				Reload = false;
// 				value2 = value;
// 				return this;
// 			};
// 		};
		
// 		this.Value3 = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return value3;
// 			} else {
// 				Reload = false;
// 				value3 = value;
// 				return this;
// 			};
// 		};
		
// 		this.Thick = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return thick;
// 			} else {
// 				Reload = false;
// 				thick = value;
// 				return this;
// 			};
// 		};
		
// 		this.TickValue = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return tickValue;
// 			} else {
// 				Reload = false;
// 				tickValue = value;
// 				return this;
// 			};
// 		};
		
	
	
	
// 		this.ValueDesc = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return valueDesc;
// 			} else {
// 				Reload = false;
// 				valueDesc = value;
// 				return this;
// 			};
// 		};
	
	
	
	
// 	this.StartAngle = function(value) {
// 		if(value===undefined) {
// 			Reload = false;
// 			return startAngle;
// 		} else {
// 			Reload = false;
// 			startAngle = value;
// 			return this;
// 		};
// 	};
	
// 	this.EndAngle = function(value) {
// 		if(value===undefined) {
// 			Reload = false;
// 			return endAngle;
// 		} else {
// 			Reload = false;
// 			endAngle = value;
// 			return this;
// 			};
// 		};
		
// 		this.Sign = function(value) {
// 			if(value===undefined) {
// 				Reload = false;
// 				return sign;
// 			} else {
// 				Reload = false;
// 				sign = value;
// 				return this;
// 				};
// 			};
			
// 			this.TickValueFontSize = function(value) {
// 				if(value===undefined) {
// 					Reload = false;
// 					return tickValueFontSize;
// 				} else {
// 					Reload = false;
// 					tickValueFontSize = value;
// 					return this;
// 					};
// 				};
				
// 				this.TickValueFontFamily = function(value) {
// 					if(value===undefined) {
// 						Reload = false;
// 						return tickValueFontFamily;
// 					} else {
// 						Reload = false;
// 						tickValueFontFamily = value;
// 						return this;
// 						};
// 					};
					
					
					
// 					this.SplitLineVisible = function(value) {
// 						if(value===undefined) {
// 							Reload = false;
// 							return splitLineVisible;
// 						} else {
// 							Reload = false;
// 							splitLineVisible = value;
// 							return this;
// 							};
// 						};
						
// 						this.SplitLineColor = function(value) {
// 							if(value===undefined) {
// 								Reload = false;
// 								return splitLineColor;
// 							} else {
// 								Reload = false;
// 								splitLineColor = value;
// 								return this;
// 								};
// 							};
							
// 							this.SplitLineWidth = function(value) {
// 								if(value===undefined) {
// 									Reload = false;
// 									return splitLineWidth;
// 								} else {
// 									Reload = false;
// 									splitLineWidth = value;
// 									return this;
// 									};
// 								};
								
// 								this.PointerLength = function(value) {
// 									if(value===undefined) {
// 										Reload = false;
// 										return pointerLength;
// 									} else {
// 										Reload = false;
// 										pointerLength = value;
// 										return this;
// 										};
// 									};
									
// 									this.PointerWidth = function(value) {
// 										if(value===undefined) {
// 											Reload = false;
// 											return pointerWidth;
// 										} else {
// 											Reload = false;
// 											pointerWidth = value;
// 											return this;
// 											};
// 										};
					
// 										this.PointerColor = function(value) {
// 											if(value===undefined) {
// 												Reload = false;
// 												return pointerColor;
// 											} else {
// 												Reload = false;
// 												pointerColor = value;
// 												return this;
// 												};
// 											};
											
// 											this.TooltipVisible = function(value) {
// 												if(value===undefined) {
// 													Reload = false;
// 													return tooltipVisible;
// 												} else {
// 													Reload = false;
// 													tooltipVisible = value;
// 													return this;
// 													};
// 												};
												
// 												this.ColorNum = function(value) {
// 													if(value===undefined) {
// 														Reload = false;
// 														return colorNum;
// 													} else {
// 														Reload = false;
// 														colorNum = value;
// 														return this;
// 														};
// 													};
	
													
// 													this.Rangevalues = function(value) {
// 														if(value===undefined) {
// 															Reload = false;
// 															return colorArray;
// 														} else {
// 															Reload = true;
// 															colorArray = eval(value);
	
// 															return this;
// 															};
// 														};
 	}; // end of constructor

// 	onCustomWidgetBeforeUpdate(changedProperties) {
// 		this._props = { ...this._props, ...changedProperties };
// 	}

// 	onCustomWidgetAfterUpdate(changedProperties) {
// 		if ("val" in changedProperties) {
// 			var newValue = changedProperties["val"];
// 			console.log("property "+ newValue);
// 			this.value = newValue;
// 			this._val =  Math.max(0, Math.min(100, newValue));
// 			console.log("this._val "+this._val);
// 			//console.log("this.value " + this.value);
// 			this._deg = this._val / 100 * this._rotate_angle;
// 			console.log("angle "+this._deg);
// 			//this.scale.style.transform = "rotate(" + this._deg + "deg)";		
// 		}


//   } // end of widget after update

  
	
} //end of class
  customElements.define('com-iprosis-sample-gauge', Gauge);
})();
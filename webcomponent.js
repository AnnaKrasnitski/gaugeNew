(function()  {
let tmpl = document.createElement('template');
tmpl.innerHTML = `
<style>
html, body
{
	padding: 0;
	margin: 0;
}

body,
.dial
{
	background-color: #000;
	overflow: hidden;
}

.gauge
{
	position: absolute;
	width: 500px;
	height: 500px;
	top: 30px;
	left: 50%;
	margin-left: -250px;
	border-radius: 100%;
	transform-origin: 50% 50%;
	-webkit-transform-origin: 50% 50%;
	-ms-transform-origin: 50% 50%;
	-webkit-transform: rotate(0deg);

}

.meter
{
	margin: 0;
	padding: 0;
}

.meter > li
{
	width: 250px;
	height: 250px;
	list-style-type: none;
	position: absolute;
	border-top-left-radius: 250px;
	border-top-right-radius: 0px;
	transform-origin:  100% 100%;;
	-webkit-transform-origin:  100% 100%;;
	-ms-transform-origin:  100% 100%;;
	transition-property: -webkit-transform;
	pointer-events: none;
}

.meter .low
{
	-webkit-transform: rotate(0deg); /* Safari & Chrome */
	-ms-transform: rotate(0deg); /* Internet Explorer */
	z-index: 8;
	background-color: #09B84F;
}

.meter .normal
{
	-webkit-transform: rotate(47deg); /* Safari & Chrome */
	-ms-transform: rotate(47deg); /* Internet Explorer */
	z-index: 7;
	background-color: #FEE62A;
}

.meter .high
{
	-webkit-transform: rotate(90deg); /* Safari & Chrome */
	-ms-transform: rotate(90deg); /* Internet Explorer */
	z-index: 6;
	background-color: #FA0E1C;
}


.dial,
.dial .inner
{
	width: 470px;
	height: 470px;
	position: relative;
	top: 10px;
	left: 5px;
	border-radius: 100%;
	border-color: purple;
	z-index: 10;
	transition-property: -webkit-transform;
	transition-duration: 1s;
	transition-timing-function: ease-in-out;
	-webkit-transform: rotate(0deg); /* Safari & Chrome */
	-ms-transform: rotate(0deg); /* Internet Explorer */

}

.dial .arrow
{
	width: 0; 
	height: 0; 
	position: absolute;
	top: 214px;
	left: 24px;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-bottom: 32px solid #FFFFFF;
	-webkit-transform: rotate(-88deg); /* Safari & Chrome */
	-ms-transform: rotate(88deg); /* Internet Explorer */


}

.gauge .value
{
	font-family: 'Josefin Slab', serif;
	font-size: 50px;
	color: #ffffff;
	position: absolute;
	top: 142px;
	left: 45%;
	z-index: 11;
}

</style>
<div class="gauge">
			<ul class="meter">
				<li class="low"></li>
				<li class="normal"></li>
				<li class="high"></li>
			</ul>

			<div class="dial">
					<div class="inner">
						<div id="needle" class="arrow">
						</div>
					</div>			
			</div>

			<div id="vals" class="value">
				0%
			</div>

		</div>

`;

class Gauge extends HTMLElement {

	constructor() {
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'});
		this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
		this.style.height = "100%";
		this._val = 0;
		this._deg = 0;
		this._rotate_angle = 180; // depends on used picture
		this.scale = this._shadowRoot.querySelector("#needle");
		this.value = this._shadowRoot.querySelector("#vals");
		this._props = {};
	}; // end of constructor

	onCustomWidgetBeforeUpdate(changedProperties) {
		this._props = { ...this._props, ...changedProperties };
	}

	onCustomWidgetAfterUpdate(changedProperties) {
		if ("val" in changedProperties) {
			var newValue = changedProperties["val"];
			console.log("property "+ newValue);
			this.value = newValue;
			this._val =  Math.max(0, Math.min(100, newValue));
			console.log("this._val "+this._val);
			//this.value.span.content = newValue;
			//console.log("this.value " + this.value);
			//var angle = this._val / 100 * this._rotate_angle;
			//console.log("angle "+angle);

				this._deg = (newValue * 177.5) / 100;
	
				//gauge_value.html(value + "%");
				this.scale.style.transform = "rotate(" + this._deg + "deg)";
				//dial.css({'transform': 'rotate('+deg+'deg)'});
			//}
			//this.scale.style.transform = "rotate(" + angle + "deg)";
		}
		// if ("max" in changedProperties) {
		// 	this._shadowRoot.getElementById("max").value = changedProperties["max"];
		// 	var angle = this._val / 100 * this._rotate_angle;
		// 	this.scale.style.transform = "rotate(" + angle + "deg)";
			////////
		//}
		// if ("min" in changedProperties) {
		// 	this._shadowRoot.getElementById("min").value = changedProperties["min"];
		// 	var angle = this._val / 100 * this._rotate_angle;
		// 	this.scale.style.transform = "rotate(" + angle + "deg)";
		// }
	}

	// /* setter of value */
	// setValue(newValue) {
	// 	this._shadowRoot.getElementById("val").value = newValue;
	// 	this._val =  Math.max(0, Math.min(100, newValue));
	// 	console.log("this._val "+this._val);
	// 	this.value.content = newValue;
	// 	console.log("this.value " + this.value);
	// 	var angle = this._val / 100 * this._rotate_angle;
	// 	console.log("angle "+angle);
	// 	this.scale.style.transform = "rotate(" + angle + "deg)";
	// }
	// /* getter of value*/
	// getValue() {
	// 	return this._shadowRoot.getElementById("val").value;
	// }

	// /* setter of max */
	// setMax(newMax) {
	// 	this._shadowRoot.getElementById("max").value = newMax;
	// 	var angle = this._val / 100 * this._rotate_angle;
	// 	console.log("angle "+angle);
	// 	this.scale.style.transform = "rotate(" + angle + "deg)";
	// }
	// /* getter of max*/
	// getMax() {
	// 	return this._shadowRoot.getElementById("max").value;
	// }
	
	// /*setter of min */
	// setMin(newMin) {
	// 	this._shadowRoot.getElementById("min").value = newMin;
	// 	var angle = this._val / 100 * this._rotate_angle;
	// 	console.log("angle "+angle);
	// 	this.scale.style.transform = "rotate(" + angle + "deg)";
	// }
	// /* getter of min*/
	// getMin() {
	// 	return this._shadowRoot.getElementById("min").value;
	// }

  }
  customElements.define('com-iprosis-sample-gauge', Gauge);
})();
(function()  {
let tmpl = document.createElement('template');
tmpl.innerHTML = `
<div style="width: 1200px; margin: 50px auto">
<div style="margin-bottom: 20px;font-family:'Segoe UI';font-size: 12px; color: #2A2A2A;">
	<label style="margin-right: 15px;">Enter utilization Percentage:</label><input id="upercentage" type="number" /> <button onclick="render()">Render Chart</button>
</div>
<div>
	<div style="float: left; ">
		<div style="float: left;margin-right: 100px;">
			<div id="id4" style="float:left; margin-right: 100px;"></div>
			<div id="id3" style="float:right"></div>
		</div>
		<div id="id2" style="float:right"></div>
	</div>
	<div id="id" style="float: left"></div>
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
		this._rotate_angle = 180; // depends on used picture
	//	this.scale = this._shadowRoot.querySelector("#scaling");
	//	this.value = this._shadowRoot.querySelector("#vals");
		this._props = {};
	}; // end of constructor

	onCustomWidgetBeforeUpdate(changedProperties) {
		this._props = { ...this._props, ...changedProperties };
	}

	onCustomWidgetAfterUpdate(changedProperties) {
		// if ("val" in changedProperties) {
		// 	var newValue = changedProperties["val"];
		// 	console.log( "property "+ newValue);
		// 	this.value = newValue;
		// 	this._val =  Math.max(0, Math.min(100, newValue));
		// 	console.log("this._val "+this._val);
		// 	//$(document).
		// 	//this.value.span.content = newValue;
		// 	//console.log("this.value " + this.value);
		// 	var angle = this._val / 100 * this._rotate_angle;
		// 	console.log("angle "+angle);
		// 	this.scale.style.transform = "rotate(" + angle + "deg)";
		// }
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
(function()  {
let tmpl = document.createElement('template');
tmpl.innerHTML = `
<style>
.sc-gauge  { width:200px; height:200px; }
.sc-background { position:relative; height:100px; margin-bottom:10px; background-color:#ccc; border-radius:150px 150px 0 0; overflow:hidden; text-align:center; }
.sc-mask { position:absolute; top:20px; right:20px; left:20px; height:80px; background-color:#fff; border-radius:150px 150px 0 0 }
.sc-percentage { position:absolute; top:100px; left:-200%; width:400%; height:400%; margin-left:100px; background-color:#f96300; }
.sc-percentage { transform:rotate(158deg); transform-origin:top center; }
.sc-min { float:left; }
.sc-max { float:right; }
.sc-value { position:absolute; top:50%; left:0; width:100%;  font-size:48px; font-weight:700 }
</style>
<div class="sc-gauge">
  <div class="sc-background">
    <div id="scaling" class="sc-percentage"></div>
    <div class="sc-mask"></div>
    <span id="val" class="sc-value">88</span>
  </div>
  <span class="sc-min">0</span>
  <span class="sc-max">100</span>
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
		this.scale = this._shadowRoot.querySelector("#scaling");

	}; // end of constructor

	/* setter of value */
	setValue(newValue) {
		console.log(10);
		this._shadowRoot.getElementById("val").value = newValue;
		console.log(20);
		this._val =  Math.max(0, Math.min(100, newValue));
		console.log("this._val "+this._val);
		var angle = this._val / 100 * this._rotate_angle;
		console.log("angle "+angle);
		this.scale.style.transform = "rotate(" + angle + "deg)";
	}
	/* getter of value*/
	getValue() {
		return this._shadowRoot.getElementById("val").value;
	}

  }
  customElements.define('com-iprosis-sample-gauge', Gauge);
})();